const dbConfig = require('../config/db.config').promise();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET; 
const login = async (userData) => {
    const findUserQuery = `SELECT u.id, u.first_name, u.middle_name, u.email, u.phone_number, u.password_hash, u.last_login, ur.role_id FROM users u LEFT JOIN user_roles ur ON u.id = ur.user_id WHERE u.email = ?`;
    const [rows] = await dbConfig.query(findUserQuery, [userData.email]);
    if (rows.length === 1) {
        const isMatch = await bcrypt.compare(userData.password, rows[0].password_hash);
        if (isMatch) {
            const token = jwt.sign({ id: rows[0].id, first_name: rows[0].first_name, middle_name: rows[0].middle_name, email: rows[0].email, phone_number: rows[0].phone_number, role_id: rows[0].role_id }, secretKey, { expiresIn: '3m' });
            return { ...rows[0], token };
        }
    }
    return null;
};



module.exports = { login};