const region = 'eu-west-1';
const paramsBucket = 'food-trucks-project';
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

module.exports = { region, paramsBucket, accessKeyId, secretAccessKey };
