require('dotenv').config();
require('../../utils/connect')();
const app = require('../../server');
const mongoose = require('mongoose');
const request = require('supertest');

describe('animal controller', () => {
  beforeEach(done => {
    mongoose.connection.dropDatabase(done);
  });

  afterAll(done => {
    mongoose.connection.close(done);
  });

  test('posts an animal', async() => {
    const res = await request(app.callback())
      .post('/animals')
      .send({
        species: 'eeyore',
        group: 'herbivore',
        size: 'large'
      });
      console.log('response', app.callback());
    expect(res.body).toEqual({
      _id: expect.any(String),
      species: 'eeyore',
      group: 'herbivore',
      size: 'large'
    });
  });
});
