const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');
app.use(express.json());
app.use('/api', routes);
app.use(cors());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
