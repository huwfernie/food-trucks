const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/food-trucks-${env}`;
const secret = process.env.SECRET || 'shhh';

module.exports = { port, env, dbURI, secret };
