const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  species: String,
  group: String,
  size: String,
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
