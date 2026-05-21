const authService = require('../services/auth.service');
const jwt = require('jsonwebtoken');
const login = async(req, res) => {
    let decodedToken = null;
    const userData = req.body;
    const authResult = await authService.login(userData);
    // console.log('Authentication result:', authResult.token);
    if (authResult) {
        decodedToken = jwt.verify(authResult.token, process.env.JWT_SECRET);
        console.log('Decoded token:', decodedToken);
        return res.status(200).json({ status: true, message: 'Login successful', token: authResult.token  });
    } else {
        return res.status(401).json({ status: false, message: 'Invalid credentials' });
    }
    // console.log('Decoded token:', decodedToken);
};


module.exports = { login };