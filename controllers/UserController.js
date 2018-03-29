'use strict';

// User controller to create subset of modular routes for users

// Require express
const express = require('express');
// Require body-parser
const bodyParser = require('body-parser');
// Require 'User' model
const User = require('../models/User');


// Create express router 
const router = express.Router();

// MIDDLEWARE for router - enable capture URL encoded data from HTML forms & return json formatted data
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());



/* Route handler methods */
// CREATE A NEW USER
router.post('/', (request, response) => {

    User.create({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    
    }, (error, user) => {
        if (error) {
            return response.status(response.statusCode).send('There was a problem registering the user');
        } else {
            return response.status(200).send(user);
        }
    });
});



/* TEST METHODS - REMOVE WHEN DEPLOYING MVP */
// RETURN ALL USERS IN DB
router.get('/', (request, response) => {

    User.find({}, (error, users) => {
        if (error) {
            return response.status(response.statusCode).send('There was a problem finding users');
        }
        else {
            return response.status(200).send(users);
        }
    });
});


// RETURN A SPECIFIC USER
router.get('/:id', (request, response) => {

    User.findById(request.params.id, (error, user) => {
        if (error) {
            return response.status(response.statusCode).send('There was a problem finding the user');
        } else if (!user) {
            return response.status(response.statusCode).send('No matching users found');
        } else {
            return response.status(response.statusCode).send(user);
        }
    });
});


// EDIT A SPECIFIC USER
router.put('/:id', (request, response) => {

    User.findByIdAndUpdate(request.params.id,  request.body, {new: true}, (error, user) => {
        if (error) {
            return response.status(response.statusCode).send('There was a problem updating the user');
        } else if (!user) {
            return response.status(response.statusCode).send('No matching users found');
        } else {
            return response.status(response.statusCode).send(user);
        }
    });
});


// DELETE A SPECIFIC USER
router.delete('/:id', (request, response) => {

    User.findByIdAndRemove(request.params.id, (error, user) => {
        if (error) {
            return response.status(response.statusCode).send('There was a problem removing the user');
        } else if (!user) {
            return response.status(response.statusCode).send('No matching user found');
        } else {
            return response.status(response.statusCode).send(`User "${user.username || user.id}" successfully removed`);
        }
    });
});



// Export router
module.exports = router;

