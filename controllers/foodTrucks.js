const Truck = require('../models/truck');

/*
Here we have the routes:
  index : return all trucks
  searchManualRoute : show all trucks within search radius.
  createRoute : Make one new truck
  showRoute : show details of one truck
  updateRoute : update details of one truck
  deleteRout : delete one truck
*/

function indexRoute(req, res, next) {
  Truck
    .find()
    .exec()
    .then((trucks) => res.json(trucks))
    .catch(next);
}

function searchManualRoute(req, res, next) {
  var limit = req.query.limit || 10;
  limit = parseInt(limit);

  // get the max distance or set it to 8 kilometers
  var maxDistance = req.query.distance || 8;

  // we need to convert the distance to "radians"???
  // the raduis of Earth is approximately 6371 kilometers
  maxDistance /= 6371;

  // get coordinates [ <longitude> , <latitude> ]
  var coords = [];
  coords[0] = req.query.longitude || 0;
  coords[1] = req.query.latitude || 0;

  // find a location
  Truck.find({
    loc: {
      $near: coords,
      $maxDistance: maxDistance
    }
  }).limit(limit).exec(function(err, locations) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(locations);
  })
    .catch(next);
}

function createRoute(req, res, next) {
  if(req.file) req.body.image = req.file.filename;
  Truck
    .create(req.body)
    .then((truck) => res.status(201).json(truck))
    .catch(next);
}

function showRoute(req, res, next) {
  Truck
    .findById(req.params.id)
    .exec()
    .then((truck) => {
      if(!truck) return res.notFound();

      res.json(truck);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  if(req.file) req.body.image = req.file.filename;
  Truck
    .findById(req.params.id)
    .exec()
    .then((truck) => {
      if(!truck) return res.notFound();

      for(const field in req.body) {
        truck[field] = req.body[field];
      }

      return truck.save();
    })
    .then((truck) => res.json(truck))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Truck
    .findById(req.params.id)
    .exec()
    .then((truck) => {
      if(!truck) return res.notFound();

      return truck.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexRoute,
  searchManual: searchManualRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
