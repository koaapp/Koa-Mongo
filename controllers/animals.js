// require('../utils/connect')();
const Animal = require('../models/Animal');

async function create(ctx) {
  const newAnimal = new Animal(ctx.request.body);
  const savedAnimal = await newAnimal.save();

  ctx.body = savedAnimal;
}

module.exports = {
  create
};
