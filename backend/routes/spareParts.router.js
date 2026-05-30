const router = require('express').Router();
const sparePartController = require('../controllers/sparePart.controller');
const authMiddleware = require('../middlemare/auth.middleware');
router.post('/add', [authMiddleware.isLoggedIn], sparePartController.addSparePart);
router.get('/find/:partNumber', [authMiddleware.isLoggedIn], sparePartController.getSparePartByPartNumber);
router.put('/update/:partNumber', [authMiddleware.isLoggedIn], sparePartController.updateSparePart);
router.get('/movement', [authMiddleware.isLoggedIn], sparePartController.getSparePartsMovement);
module.exports = router;