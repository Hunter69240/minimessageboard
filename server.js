// Import required modules
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index'); // Import custom route file

const app = express(); // Create an Express app

// Set view engine to EJS for rendering dynamic HTML pages
app.set('view engine', 'ejs');

// Set the views directory (where .ejs files are stored)
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data (from POST requests)
app.use(express.urlencoded({ extended: true }));

// Serve static files like CSS or images from the 'public' folder (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Use the router defined in routes/index.js for all '/' routes
app.use('/', indexRouter);

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
