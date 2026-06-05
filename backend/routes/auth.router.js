const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const middleWare =  require('../middlemare/auth.middleware')
router.post('/login', authController.login);
router.get('/check-user', [middleWare.isLoggedIn], (req, res)=>{
    try {
        res.status(201).json({status: true, user: req.user})
        
    } catch (error) {
    console.error("Router error:", error);
        return res.status(500).json({ status: false, error: 'Internal server error.' });  
    }
})
module.exports = router;