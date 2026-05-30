const dbConfig = require('../config/db.config');
const getUserLoginStatus = async (user) => {
    // Implementation for fetching user login status
    console.log("User in service:", user); // Debugging line to check the user object
};
module.exports = { getUserLoginStatus };