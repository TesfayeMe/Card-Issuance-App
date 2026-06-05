const userService = require('../services/user.service');

//update user
const updateUser = async (req, res) => {
    const userData = req.body;
//    console.log(userData.emailAddress)
    const checkExistingUser = await userService.getUserByEmail(userData.emailAddress);
    if (!checkExistingUser) {
        return res.status(400).json({ message: 'Email_does_not_exist' });
    }
    else
    {  
        console.log(userData.emailAddress)
    const updateRes = await userService.updateUser(userData);
        if (updateRes.success) {
            res.status(201).json({ status: true, message: 'User updated successfully', userEmail: updateRes.userEmail });
        } else {
            res.status(500).json({ message: 'Failed_to_update_user' });
        }
    }
};

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
     const user = req.user; // Get the logged-in user's information
    // console.log("User in controller:", user); // Debugging line to check the user object
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
  

//disable user
const changeUserStatus = async (req, res) => {
    const userId = req.params.id;
    const disableRes = await userService.changeUserStatus(userId);
    if (disableRes.success) {
        res.status(200).json({ message: 'User disabled successfully', userId: disableRes.userId });
    } else {
        res.status(500).json({ message: 'Failed to disable user' });
    }
};

//change user roles
const changeUserRoles = async (req, res) => {
    const userId = req.params.id;
    const managerId = 20; 
    const { role } = req.body;
    const updateData = {
        userId: userId,
        role: role,
        managerId: managerId
    };
    const changeRolesRes = await userService.changeUserRoles(updateData);
    if (changeRolesRes.success) {
        res.status(200).json({ message: 'User roles updated successfully', userId: changeRolesRes.userId });
    } else {    
        res.status(500).json({ message: 'Failed to update user roles' });
    }
};

module.exports = {
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
  changeUserStatus,
  changeUserRoles
};