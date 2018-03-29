'use strict';

// Require 'express' module
const express = require('express');
// Require db connection
const db = require('./db');
// Require UserController
const UserController = require('./controllers/UserController');
// Require EventController
const EventController = require('./controllers/EventController');


// Instantiate express object
const app = express();


// MIDDLEWARE to link User- & EventControllers to '/users' & '/events' routes, respectively
app.use('/users', UserController);
app.use('/events', EventController);



// Export app to be used elsewhere
module.exports = app;
