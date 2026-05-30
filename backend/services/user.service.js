const dbConnection = require('../config/db.config').promise();
const bcrypt = require('bcrypt');

//update user
const updateUser = async (userData) => {
    const { firstName, middleName, lastName, emailAddress, phoneNumber, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword);
    const status = 'ACTIVE';

  const query = 'UPDATE users SET first_name = ?, middle_name = ?, last_name = ?, phone_number = ?, password_hash = ?, status = ? WHERE email = ?';
  const [updateResult] = await dbConnection.query(query, [firstName, middleName, lastName, phoneNumber, hashedPassword, status, emailAddress]);
  if (updateResult.affectedRows === 0) {
    console.error('Failed to update user:', updateResult);
    return { success: false, error: `Failed to update user ${updateResult.error}` };
  }
  else {
    console.log('User updated successfully with email Address:', emailAddress);
    return { success: true, userEmail: emailAddress };
  }
};

//create user
const createUser = async (userData) => {
  const adminId = 15; 
  const { emailAddress, role_id } = userData;

  // 1. Start the transaction on your connection
  await dbConnection.beginTransaction();

  try {
    // 2. Insert the user
    const userQuery = 'INSERT INTO users (email, created_by) VALUES (?, ?)';
    const [userResult] = await dbConnection.query(userQuery, [emailAddress, adminId]);

    // Check if the user insert actually worked
    if (userResult.affectedRows === 0 || !userResult.insertId) {
      throw new Error('Failed to insert user into the database');
    }

    const userId = userResult.insertId;

    // 3. Insert the user role
    const roleQuery = 'INSERT INTO user_roles (user_id, role_id) VALUES (?, ?)';
    const [roleResult] = await dbConnection.query(roleQuery, [userId, role_id]);

    // Check if the role assignment worked
    if (roleResult.affectedRows === 0) {
      throw new Error('Failed to assign role to the created user');
    }

    // 4. Commit the transaction if everything succeeded
    await dbConnection.commit();
    console.log('User and role created successfully. User ID:', userId);
    
    return { success: true, userId: userId };

  } catch (error) {
    // 5. Rollback ALL changes if any error occurs above
    await dbConnection.rollback();
    console.error('Transaction failed. Rolled back changes. Error:', error.message);
    
    return { success: false, error: error.message };
  }
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
//change user status
const changeUserStatus = async (userId) => {
  const query = 'UPDATE users SET status = ? WHERE id = ?';  
    const [updateResult] = await dbConnection.query(query, ['DISABLED', userId]);
    if (updateResult.affectedRows === 0) {
      console.error('Failed to disable user:', updateResult);
      return { success: false, error: `Failed to disable user ${updateResult.error}` };
    }
    else {
      console.log('User disabled successfully with ID:', userId);
      return { success: true, userId: userId };
    }
  } 

//change user roles
const changeUserRoles = async (updateData) => {
  const { userId, role, managerId } = updateData;
  console.log('Changing role for user ID:', userId, 'to role ID:', role);
  const changeRolesQuery = 'update user_roles set role_id = ?, updated_by = ? where user_id = ?';
  const changeRolesRes = await dbConnection.query(changeRolesQuery, [role, managerId, userId]);
  if (changeRolesRes[0].affectedRows === 0) {
    console.error('Failed to delete existing roles for user:', changeRolesRes);
    return { success: false, error: `Failed to change user role for user ${changeRolesRes.error}` };
  }
  else {
return { success: true, userId: userId };
  }

};
  

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  changeUserStatus,
  getUserByEmail,
  updateUser,
  changeUserRoles
};