const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Initialize Firebase Admin
const serviceAccount = require('./firebaseAdminConfig.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.redirect('/my-library');
});

// My Library page
app.get('/my-library', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'public/user/my-library.html'));
});

// Available Books page
app.get('/available-books', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'public/user/available-books.html'));
});

// Request Book Exchange page
app.get('/request-exchange', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'public/user/request-exchange.html'));
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
