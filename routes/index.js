/*eslint-disable no-console*/
require('dotenv').config();

const server = require('../server');

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`API server started on ${port}`));

module.exports = (router) => {
  //what does prefix do?
  router.prefix('/v1');
  router.use('/animals', require('./animals'));
};
