require('dotenv').config();
require('../../utils/connect')();
const mongoose = require('mongoose');
const Animal = require('../../models/Animal');

describe('Animal model', () => {

  beforeEach(done => {
    mongoose.connection.dropDatabase(done);
  });

  afterAll(done => {
    mongoose.connection.close(done);
  });

  it('validates a good model', () => {
    const animal = new Animal({
      species: 'piglet',
      group: 'omnivore',
      size: 'x-small'
    });
    expect(animal.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      species: 'piglet',
      group: 'omnivore',
      size: 'x-small'
    });
  });
});
