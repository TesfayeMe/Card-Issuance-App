const dbconfig = require('../config/db.config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//check if the user is logged in by verifying the token
const isLoggedIn = (req, res, next) => {
    const userToken = req.headers['user-access-token'];
    if (!userToken) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    try {
        const decodedToken = jwt.verify(userToken, process.env.JWT_SECRET);
        req.user = decodedToken;
        // console.log('Decoded token:', decodedToken);
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'token_expired.' });
        }
        console.error('Error verifying token:', err);
        return res.status(401).json({ error: 'Invalid token.' });
    }
};
//refresh the token if user and token are valid and not expired
const refreshToken = async (req, res) => {
    const userToken = req.headers['user-access-token'];
    if (!userToken) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    try {
        const decodedToken = jwt.verify(userToken, process.env.JWT_SECRET, { ignoreExpiration: true });
        const newToken = jwt.sign({ id: decodedToken.id, first_name: decodedToken.first_name, middle_name: decodedToken.middle_name, email: decodedToken.email, phone_number: decodedToken.phone_number, role_id: decodedToken.role_id }, process.env.JWT_SECRET, { expiresIn: '5m' });
        return res.json({ token: newToken });
    } catch (err) {
        console.error('Error refreshing token:', err);
        return res.status(401).json({ error: 'Invalid token.' });
    }
};
//check if logged in user is admin
const isAdmin = (req, res, next) => {
    if (req.user && req.user.role_id === 1) {
        next();
    } else {
        return res.status(403).json({ message: 'is_not_admin' });
    }
};
//check if logged in user is admin or manager
const isAdminOrManager = (req, res, next) => {
    if (req.user && (req.user.role_id === 1 || req.user.role_id === 2)) {
        next();
    } else {
        // console.log('User role:', req?.user?.role_id ); // Debugging line to check the user role
        return res.status(403).json({ message: 'is_not_admin_or_manager' });
    }
};
module.exports = {
    isLoggedIn,
    refreshToken,
    isAdmin,
    isAdminOrManager
};