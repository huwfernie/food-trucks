const mongoose = require('mongoose');
const s3 = require('../lib/s3');
const configS3 = require('../config/s3');


const foodTruckSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // category: { type: String, required: true },
  // location: {
  //   name: { type: String, required: true },
  //   lat: { type: String, required: true },
  //   lon: { type: String, required: true }
  // },
  // loc: {
  //   type: [Number],  // [<longitude>, <latitude>]
  //   index: '2d'      // create the geospatial index
  // },
  // website: { type: String, required: false },
  // details: { type: String, required: false },
  image: { type: String, required: true }//,
  // startTime: { type: Date, required: true }, //Start time, date set to /01/02/2003
  // finishTime: { type: Date, required: true }, //new Date(17, 7, 9, 8, 0, 0, 0),
  // date: { type: Date, required: true } // new Date(17, 7, 9, 17, 0, 0, 0)
});

foodTruckSchema
  .path('image')
  .set(function getPreviousImage(image) {
    this._image = this.image;
    return image;
  });

foodTruckSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://s3-eu-west-1.amazonaws.com/${configS3.paramsBucket}/${this.image}`;
  });


foodTruckSchema.pre('remove', function removeImage(next) {
  if(this.image) return s3.deleteObject({ Key: this.image }, next);
  next();
});

foodTruckSchema.pre('save', function checkPreviousImage(next) {
  if(this.isModified('image') && this._image) {
    return s3.deleteObject({ Key: this._image }, next);
  }
  next();
});

module.exports = mongoose.model('Truck', foodTruckSchema);
