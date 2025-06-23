var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: process.env.MONGO_URI_PROD,
  development: process.env.MONGO_URI_DEV,
  test: process.env.MONGO_URI_TEST
}
module.exports = config;
