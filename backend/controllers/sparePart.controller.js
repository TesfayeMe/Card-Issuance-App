const sparePartService = require('../services/sparePart.service');
const addSparePart = async (req, res) => {
  // Implementation for adding a spare part
  const user = req.user;
    try {
    // const sparePartData = req.body;
    const newSparePartId = await sparePartService.addSparePart(user);
    res.status(201).json({ message: 'Spare part added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add spare part: ' + error.message });
  }
};
const getSparePartByPartNumber = async (req, res) => {
  console.log('User Role', req.user.role_id); 
  const user = req.user;
        const criteria = req.params.partNumber; 
        const spareParts = await sparePartService.getSparePartByPartNumber(criteria, user);
        if(spareParts)    {
        res.status(200).json(spareParts);
        } else {
        res.status(404).json({ error: 'Spare parts not found' });
        }
};
const updateSparePart = async (req, res) => {
    const updateData = req.body;
    const updateResult = await sparePartService.updateSparePart(updateData);
    if(updateResult)    {
        res.status(200).json({ message: 'Spare part updated successfully', data: updateResult }); 
    } else {
        res.status(500).json({ error: 'Failed to update spare part' });
    }
};

//spare parts movements
const getSparePartsMovement = async (req, res) => {
  const movementCriteria = req.body; // Assuming criteria is sent as query parameters
  const user = req.user; // Get the logged-in user's information
        const movements = await sparePartService.getSparePartsMovement(movementCriteria, user);
        if(movements)    {
          res.status(200).json({ status: true, data: movements });
        }
        else
          {
          return res.status(404).json({ status: false, message: 'No movements found' });

        }
    
};
module.exports = {
  addSparePart,
  getSparePartByPartNumber,
  updateSparePart,
  getSparePartsMovement
};