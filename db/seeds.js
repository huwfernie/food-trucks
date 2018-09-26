const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI, { useMongoClient: true });

const Truck = require('../models/truck');

Truck.collection.drop();

const seedData = [{
  name: 'Tacos'
},{
  name: 'Chinese'
},{
  name: 'Pizza'
},{
  name: 'Curry'
}];

Truck
  .create(seedData)
  .then(foodTrucks => console.log(`${foodTrucks.length} food trucks created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

/*
  To add seeds to your local database run : ~..... : node db/seeds.js
*/
