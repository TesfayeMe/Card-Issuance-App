const dbConnection = require('../config/db.config');
const express = require('express');
const router = express.Router();
const installController = require('../controllers/install.controller');

router.get('/install', installController.install);
module.exports = router;