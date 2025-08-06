const express = require('express');
const router = express.Router(); // Create a new router object

// Sample messages array acting like a temporary database
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// Route: GET /
router.get('/', (req, res) => {
  // Render the index.ejs file and pass title + messages
  res.render('pages/index', {
    title: "Mini Messageboard",
    messages: messages
  });
});

// Route: GET /new
router.get('/new', (req, res) => {
  // Render the form.ejs file to show message submission form
  res.render('form');
});

// Route: POST /new (form submission)
router.post('/new', (req, res) => {
  // Get user input from the form
  const messageUser = req.body.messageUser;   // Name input
  const messageText = req.body.messageText;   // Message text input

  // Add new message object to the messages array
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  // Redirect user to home page to show updated message list
  res.redirect('/');
});

module.exports = router; // Export the router to use in app.js
