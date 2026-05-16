const dbConfig = require('../config/db.config').promise();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET; 
const login = async (userData) => {
    const findUserQuery = `SELECT id, first_name, middle_name, email, phone_number, password_hash, last_login FROM users WHERE email = ?`;
    const [rows] = await dbConfig.query(findUserQuery, [userData.email]);
    if (rows.length === 1) {
        const isMatch = await bcrypt.compare(userData.password, rows[0].password_hash);
        if (isMatch) {
            const token = jwt.sign({ id: rows[0].id, first_name: rows[0].first_name, middle_name: rows[0].middle_name, email: rows[0].email, phone_number: rows[0].phone_number }, secretKey, { expiresIn: '1h' });
            return { ...rows[0], token };
        }
    }
    return null;
};



module.exports = { login};