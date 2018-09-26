const router = require('express').Router();
const foodTrucks = require('../controllers/foodTrucks');
const imageUpload = require('../lib/imageUpload');

// foodTrucks

router.route('/foodTrucksShowAll')
  .get(foodTrucks.index);

router.route('/foodTrucks')
  .post(imageUpload, foodTrucks.create);

router.route('/foodTrucksSearch')
  .get(foodTrucks.searchManual);

router.route('/foodTrucks/:id')
  .get(foodTrucks.show)
  .put(imageUpload, foodTrucks.update)
  .delete(foodTrucks.delete);

// catch all - 404
router.all('/*', (req, res) => res.notFound());

module.exports = router;
