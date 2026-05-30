const reportsService = require('../services/reports.service');
const getUserLoginStatus = async (req, res) => {
    const user = req.user;
    const userLoginstatus = await reportsService.getUserLoginStatus(user);
    console.log("User login status in controller:", userLoginstatus); // Debugging line to check the user login status
    if(userLoginstatus) {
        return res.json(userLoginstatus);
    }
    else
    {        return res.status(404).json({ error: 'User login status not found' });
    }
};

module.exports = { getUserLoginStatus };