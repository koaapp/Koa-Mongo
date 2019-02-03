/*eslint-disable no-console*/
require('dotenv').config();
require('../utils/connect')();

const server = require('./server');

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`API server started on ${port}`));
