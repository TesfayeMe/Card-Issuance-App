const dbconfig = require('../config/db.config').promise();
const path = require("path");
const multer = require("multer");
const xlsx = require("xlsx");
const addSparePart = async () => {
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
    const createdBy = 17; // Assuming created_by is 1 for this example
    spareParts.forEach(part => {
        part.created_by = createdBy;
    });
    const values = spareParts.map((row)=>[
        row.Description,
        row.part_number,
        row.quantity,
        row.created_by

    ]);
    const insertSparePart = 'insert into spare_parts(description, part_number, quantity_available, created_by) values ?'
    dbconfig.query(insertSparePart, [values], (err, result) =>
        {
        if(err)
        {
            console.log(err);
            return null
        }
        else {
            console.log(result);
            return result.affectedRows
        }
    });
    // console.log(spareParts);
    // return spareParts;
} catch(error)
{
    console.log(error);
    return null
}


};
module.exports = {
  addSparePart,
};