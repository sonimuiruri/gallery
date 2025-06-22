
require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

// Load routes
const index = require('./routes/index');
const image = require('./routes/image');

// Initialize the app
const app = express();

// Connect to MongoDB using the URI from config
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Database connected successfully'))
