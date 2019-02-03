
module.exports = (router) => {
  //what does prefix do?
  router.prefix('/v1');
  router.use('/animals', require('./animals'));
};
