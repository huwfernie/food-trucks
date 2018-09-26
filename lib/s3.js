const S3 = require('aws-sdk/clients/s3');
const config = require('../config/s3');

module.exports = new S3({
  region: config.region,
  params: { Bucket: config.paramsBucket },
  credentials: {
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey
  }
});
