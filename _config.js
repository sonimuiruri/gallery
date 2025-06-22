var config = {};

config.mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/darkroom';

module.exports = config;