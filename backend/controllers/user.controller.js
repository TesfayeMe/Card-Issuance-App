const userService = require('../services/user.service');

//create user
const createUser = async (req, res) => {
    const userData = req.body;
    const checkExistingUser = await userService.getUserByEmail(userData.emailAddress);
    if (checkExistingUser) {
        return res.status(400).json({ message: 'Email_already_exists' });
    }
    else
    {  
    const creationResult = await userService.createUser(userData);
        if (creationResult.success) {
            res.status(201).json({ message: 'User created successfully', userId: creationResult.userId });
        } else {
            res.status(500).json({ message: 'Failed_to_create_user' });
        }
    }
};

//get all users
const getAllUsers = async (req, res) => {
   const allUsers = await userService.getAllUsers(req, res);
   if(!allUsers || allUsers.length === 0) {
    return res.status(404).json({ message: 'No users found' });
   }
   else
   {
res.status(200).json(
    {
       message: 'Users retrieved successfully',
       users: allUsers
    });
   }
};

//get user by id
const getUserById = async (req, res) => {
  const user = await userService.getUserById(req, res);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    } else {
        res.status(200).json({
            message: 'User retrieved successfully',
            user: user
        });
    }
};  
  

module.exports = {
  createUser,
  getAllUsers,
  getUserById
};