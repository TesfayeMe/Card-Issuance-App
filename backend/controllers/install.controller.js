const installService = require('../services/install.service');

const install = async(req, res) => {
  const installResult = await installService.install(req, res);
    if (installResult.success) {
        res.json({ message: 'Installation successful' });
    } else {
        res.status(500).json({ error: 'Installation failed', details: installResult.error });
    }

};

module.exports = { install };