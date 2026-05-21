const sparePartService = require('../services/sparePart.service');
const addSparePart = async (req, res) => {
  // Implementation for adding a spare part
    try {
    // const sparePartData = req.body;
    const newSparePartId = await sparePartService.addSparePart();
    res.status(201).json({ message: 'Spare part added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add spare part: ' + error.message });
  }
};
module.exports = {
  addSparePart,
};