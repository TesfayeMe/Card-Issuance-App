const authService = require('../services/auth.service');
const login = async(req, res) => {
    const userData = req.body;
    const authResult = await authService.login(userData);
    // console.log('Authentication result:', authResult.token);
    if (authResult) {
        return res.status(200).json({ status: true, message: 'Login successful', token: authResult.token });
    } else {
        return res.status(401).json({ status: false, message: 'Invalid credentials' });
    }
};


module.exports = { login };