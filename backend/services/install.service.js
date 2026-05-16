const dbConnection = require('../config/db.config');
const install = async () => {
  console.log('Installing database...');
  // Simulate installation process
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true };
};
module.exports = { install };