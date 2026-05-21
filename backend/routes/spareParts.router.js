const router = require('express').Router();
const sparePartController = require('../controllers/sparePart.controller');
router.post('/add', sparePartController.addSparePart);
module.exports = router;