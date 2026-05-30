const router = require('express').Router();
const reportsController = require('../controllers/reports.controller');
const middleWare= require('../middlemare/auth.middleware');

router.get('/user-login-status', [middleWare.isLoggedIn, middleWare.isAdminOrManager], reportsController.getUserLoginStatus);
module.exports = router;