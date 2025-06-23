require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Get the full connection string from the environment
const mongodb_url = process.env.MONGO_URI; // this must be set in Render dashboard
const dbName = '/winfreymuiruri'; // optional, if not already in the connection string

mongoose.connect(`${mongodb_url}${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB successfully');
  }
});

// Initialize the app
const app = express();

// View engine
app.set('view engine', 'ejs');

// Public folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());

// Routes
app.use('/', index);
app.use('/image', image);

// Export the app for testing
module.exports = app;

// Start the server only if this file is run directly
if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`);
    });
}
