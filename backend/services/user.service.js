const dbConnection = require('../config/db.config').promise();
const bcrypt = require('bcrypt');
//create user
const createUser = async (userData) => {
    const adminId = 15; // Placeholder for admin ID, replace with actual logic to get admin ID
  const { firstName, middleName, lastName, emailAddress, phoneNumber, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('Hashed password:', hashedPassword);
  const query = 'INSERT INTO users (first_name, middle_name, last_name, email, phone_number, password_hash, created_by) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const [result] = await dbConnection.query(query, [firstName, middleName, lastName, emailAddress, phoneNumber, hashedPassword, adminId]);
  if (result.affectedRows === 0) {
    console.error('Failed to create user:', result);
    return { success: false, error: `Failed to create user ${result.error}` };
  }
  else if (result.insertId)
  {
    console.log('User created successfully with ID:', result.insertId);
    return { success: true, userId: result.insertId };
  }
  else
  {
    console.error('Unexpected result from user creation:', error);
    return { success: false, error: 'Unexpected result from user creation' };
  }
  console.log('User creation result:', result);
};

//check if email already exists
const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = ?';
    try {
        const [results] = await dbConnection.query(query, [email]);
        if (results.length === 0) {
            return null; // No user found with the given email
        }
        return results[0]; // Return the first user found (should be only one due to unique email constraint)
    } catch (err) {
        console.error('Error fetching user by email:', err);
        throw err; // Rethrow the error to be handled by the caller
    }
};

const getAllUsers = async (req, res) => {
  const query = 'SELECT * FROM users';
  try {
    const [results] = await dbConnection.query(query);
    if (results.length === 0) {
      return null;
    }
    return results;
  } catch (err) {
    console.error('Error fetching users:', err);
    throw err; // Rethrow the error to be handled by the caller
  }
  }


const getUserById = async (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM users WHERE id = ?';
  try {
    const [results] = await dbConnection .query(query, [id]);
    if (results.length === 0) {
      return null;
    }
    return results[0];
  } catch (err) {
    console.error('Error fetching user:', err);
    throw err;
  }
  }


module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail
};