const dbconfig = require('../config/db.config').promise();
const path = require("path");
const multer = require("multer");
const xlsx = require("xlsx");

//add spare part
const addSparePart = async (user) => {
    console.log("User in service:", user); // Debugging line to check the user object
try{
const filePath = path.join(__dirname,"../files/spring_screw_washer.xlsx");
// console.log(filePath);
const workbook = xlsx.readFile(filePath);
    // First sheet name
    const sheetName = workbook.SheetNames[0];
    // Sheet object
    const sheet = workbook.Sheets[sheetName];
    // Convert to JSON
    const spareParts = xlsx.utils.sheet_to_json(sheet);
    const createdBy = user.id; // Using the logged-in user's ID
    spareParts.forEach(part => {
        part.created_by = createdBy;
    });
    const values_sparePart = spareParts.map((row)=>[
        row.Description,
        row.part_number,
        row.quantity,
        row.created_by

    ]);

    //cheecking the value if exist or not
    //if exist then update the quantity else insert new record
    const checkSparePartExists = await getSparePartByPartNumber(values_sparePart.map(row => row[1]));
    // await dbconfig.beginTransaction();
    // checkSparePart.length > 0 &&  updateSparePart(values_sparePart.map(row => row[1]), values_sparePart.map(row => row[2]));
let affectedSpares = [];
if(checkSparePartExists && checkSparePartExists.length > 0)
{
    const updatingValue = values_sparePart.filter(spare => checkSparePartExists.some(part => part.part_number === spare[1]));
         await updateSparePart(updatingValue, user.id);
         // checkSparePartExists?.length > 0 &&  updateSparePart(checkSparePartExists);
         console.log("the following part numbers exist:", updatingValue);
    console.log("the following part numbers exist from db:", checkSparePartExists);


     affectedSpares = checkSparePartExists.map(part => {
        const updatedPart = updatingValue.find(spare => spare[1] === part.part_number);
        if (updatedPart) {
            return {
                id: part.id,
                movement_type: 'IN',
                quantity_moved: updatedPart[2],
                reference_type: 'INITIAL_STOCK',
                performed_by: user.id,
                description: 'Stock received',
            };
        }
        return null;
    }).filter(part => part !== null);
        
        console.log(affectedSpares);
const stockMovementsResult = await addStockMovements(affectedSpares);
if(stockMovementsResult)    {
    console.log(`${stockMovementsResult} stock movements recorded successfully.`);
} else {
    console.log("Failed to record stock movements.");
}





}
    if(!checkSparePartExists || checkSparePartExists.length === 0)
    {
        const insertedSpares = [];
    console.log("All uploaded parts will be inserted:", values_sparePart);
    const insertSparePart = await insertSparePartQuery(values_sparePart);
    if(insertSparePart)    {








        
        const checkSparePartExistence = await getSparePartByPartNumber(values_sparePart.map(row => row[1]));
         insertedSpares.push(...checkSparePartExists.map(part => {
            const insertedPart = values_sparePart.find(spare => spare[1] === part.part_number);
            if (insertedPart) {
                return {
                    id: part.id,
                    movement_type: 'IN',
                    quantity_moved: insertedPart[2],
                    reference_type: 'INITIAL_STOCK',
                    performed_by: user.id,
                    description: 'Stock received',
                };
            }
            return null;
        }).filter(part => part !== null));























        const stockMovementsResult = await addStockMovements(insertedSpares);
        if(stockMovementsResult)    {
            console.log(`${stockMovementsResult} stock movements recorded successfully.`);
        } else {
            console.log("Failed to record stock movements.");
        }
        console.log(`${insertSparePart} rows inserted successfully.`);
    } else {
        console.log("Failed to insert spare parts.");
    }
    }
    else
    {
    const segmentedSpare = values_sparePart.filter(spare => !checkSparePartExists.some(part => part.part_number === spare[1]));
    console.log("the following part numbers are new and will be inserted:", segmentedSpare);
    if(segmentedSpare.length > 0)    
        {
        const insertSparePart = await insertSparePartQuery(segmentedSpare);
        if(insertSparePart)    {
            console.log(`${insertSparePart} new rows inserted successfully.`);
        } else {
            console.log("Failed to insert new spare parts.");
        }
    }
    }
   
} catch(error)
{
    console.log(error);
    // await dbconfig.rollback();
    return null
}
}
//insert spare part query
const insertSparePartQuery = async (values_sparePart) => {
    const insertSparePart = 'insert into spare_parts(description, part_number, quantity_available, created_by) values ?'
    try {
        const [result] = await dbconfig.query(insertSparePart, [values_sparePart]);
        return result.affectedRows;
        return true;
    } catch (err) {
        console.log(err);
        // await dbconfig.rollback();
        return null;
    }
}
//update spare part quantity
const updateSparePart = async (checkSparePart, userId) => {
    await checkSparePart.forEach(part => {
        const query = 'update spare_parts set quantity_available = quantity_available + ? where part_number = ?'
       dbconfig.query(query, [part[2], part[1]], (err, result) => {
            if (err) {
                console.log(err);
                // await dbconfig.rollback();
                return null;
            }
        });
        return true;

    });
    
}
//get spare part by part number
const getSparePartByPartNumber = async (partNumbers, user) => {

  
        const query = 'SELECT id, part_number FROM spare_parts WHERE part_number IN (?)';
       const [rows] = await dbconfig.query(query, [partNumbers]);
        return rows.length > 0 ? rows : null;

}

//add stock movements
const addStockMovements = async (checkSparePart) => {
    checkSparePart.forEach(part => {
        const query = 'insert into stock_movements(spare_part_id, movement_type, quantity_moved, reference_type, performed_by, description) values(?, ?, ?, ?, ?, ?)'
        dbconfig.query(query, [part.id, part.movement_type, part.quantity_moved, part.reference_type, part.performed_by, part.description], (err, result) => {
            if (err) {
                console.log(err);
                return null;
            }
            else {
                console.log(result);
                return result.affectedRows;
            }
        });
    });
};

//get spare parts movement with dynamic filters
const getSparePartsMovement = async (movementCriteria = {}, user) => {
// console.log("User in service:", user); // Debugging line to check the user object
    let MovementQuery = `
        SELECT 
            sp.description,
            sp.part_number,
            sp.quantity_available,
            sp.minimum_stock_level,
            ANY_VALUE(sm.movement_type) AS movement_type,
            SUM(sm.quantity_moved) AS moved,
            ANY_VALUE(sm.reference_type) AS reference_type,
            ANY_VALUE(sm.machine_id) AS Machine,
            ANY_VALUE(sm.module_id) AS Module,
            ANY_VALUE(sm.performed_by) AS performed_by,
            ANY_VALUE(sm.description) AS movement_description,
            ANY_VALUE(sm.created_at) AS created_at
        FROM spare_parts sp
        JOIN stock_movements sm 
            ON sp.id = sm.spare_part_id
    `;

    const conditions = [];
    const values = [];

    // dynamic filters
    if(movementCriteria.part_number !== undefined && movementCriteria.part_number !== null) {
        conditions.push("sp.part_number LIKE ?");
        values.push(`%${movementCriteria.part_number}%`);
    }
    if(movementCriteria.description !== undefined && movementCriteria.description !== null) {
        conditions.push("sp.description LIKE ?");
        values.push(`%${movementCriteria.description}%`);
    }
    if (movementCriteria.machine_id !== undefined && movementCriteria.machine_id !== null) {
        conditions.push("sm.machine_id = ?");
        values.push(movementCriteria.machine_id);
    }

    if (movementCriteria.module_id !== undefined && movementCriteria.module_id !== null) {
        conditions.push("sm.module_id = ?");
        values.push(movementCriteria.module_id);
    }
    if(movementCriteria.performed_by !== undefined && movementCriteria.performed_by !== null)
    {
        conditions.push("sm.performed_by = ?");
        values.push(movementCriteria.performed_by);
    }
    if(movementCriteria.created_at !== undefined && movementCriteria.created_at !== null)
    {
        conditions.push("sm.created_at = ?");
        values.push(movementCriteria.created_at);
    }
    if(movementCriteria.reference_type !== undefined && movementCriteria.reference_type !== null)
    {
        conditions.push("sm.reference_type = ?");
        values.push(movementCriteria.reference_type);
    }
    if(movementCriteria.to_date !== undefined && movementCriteria.to_date !== null)
    {
        conditions.push("sm.created_at <= ?");
        values.push(movementCriteria.to_date);
    }
    if(movementCriteria.movement_type !== undefined && movementCriteria.movement_type !== null)
    {
        conditions.push("sm.movement_type = ?");
        values.push(movementCriteria.movement_type);
    }
    if(movementCriteria.quantity_moved !== undefined && movementCriteria.quantity_moved !== null)
    {
        conditions.push("sm.quantity_moved = ?");
        values.push(movementCriteria.quantity_moved);
    }
//append machine and module filters if exist
if (conditions.length > 0 && (movementCriteria.movement_type !== undefined && movementCriteria.movement_type === 'out')) {
    if(movementCriteria.machine_id !== undefined && movementCriteria.machine_id !== null)
    {
        MovementQuery += `JOIN machines machine ON
    sm.machine_id = machine.id`;
    }
    if(movementCriteria.module_id !== undefined && movementCriteria.module_id !== null)
    {
        MovementQuery += ` JOIN machine_modules mc_mod ON
    sm.module_id = mc_mod.id`;
    }
}
    // append WHERE clause
    if (conditions.length > 0) {
        MovementQuery += ` WHERE ${conditions.join(" AND ")}`;
    }

    MovementQuery += `
        GROUP BY 
            sp.id,
            sp.description,
            sp.part_number,
            sp.quantity_available,
            sp.minimum_stock_level
        ORDER BY moved DESC
        LIMIT 13
    `;
    const [rows] = await dbconfig.query(MovementQuery, values);

    return rows.length > 0 ? rows : null;
};

module.exports = {
  addSparePart,
  updateSparePart,
  getSparePartByPartNumber,
  addStockMovements,
  getSparePartsMovement
};