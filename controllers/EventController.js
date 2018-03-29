'use strict';

// Event controller to create subset of modular routes for events


// Require express
const express = require('express');
// Require body-parser
const bodyParser = require('body-parser');
// Require Event model
const Event = require('../models/Event');


// Create express router
const router = express.Router();

// MIDDLEWARE for router - enable capture URL encoded data from HTML forms & return json formatted data
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());



/* Route handler methods */
// CREATE A NEW EVENT
router.post('/', (request, response) => {

    Event.create({
        // user: request.user.id <= change to this!
        user: request.body.user,
        eventName: request.body.eventName,    
        imageLink: request.body.imageLink,
        description: request.body.description,
        date: request.body.date,
        address: request.body.address,
        city: request.body.city,
        country: request.body.country,
        venueName: request.body.venueName,
        beginTime: request.body.beginTime,
        endTime: request.body.endTime,
        contactEmail: request.body.contactEmail,
        mapLatitude: request.body.mapLatitude,
        mapLongitude: request.body.mapLongitude
    
    }, (error, event) => {
        if (error) {
            return response.status(response.statusCode).send('There was a problem registering the event');
        } else {
            return response.status(response.statusCode).send(event);
        }
    });
});


// RETURN ALL EVENTS
router.get('/', (request, response) => {

    Event.find({}, (error, events) => {
        if (error) {
            return response.status(response.statusCode).send('There was a problem finding events');
        } else {
            return response.status(response.statusCode).send(events);
        }
    });
});


// GETS A SINGLE EVENT FROM THE DB
router.get('/:id', (request, response) => {

    Event.findById(request.params.id, (error, event) => {
        if (error) {
            return response.status(response.statusCode).send('There was a problem finding the event');
        } else if (!event) {
            return response.status(response.statusCode).send('No matching event found');
        } else {
            return response.status(response.statusCode).send(event);
        } 
    });
});


// EDITS A SPECIFIED EVENT IN THE DB
router.put('/:id', (request, response) => {

    Event.findByIdAndUpdate(request.params.id, request.body, {new: true}, (error, event) => {
        if (error) {
            return response.status(response.statusCode).send('There was a problem updating the event');
        } else if (!event) {
            return response.status(response.statusCode).send('No matching event found');
        } else {
            return response.status(response.statusCode).send(event);
        } 
    });
});


// DELETES A SPECIFIED EVENT FROM THE DB
router.delete('/:id', (request, response) => {

    Event.findByIdAndRemove(request.params.id, (error, event) => {
        if (error) {
            return response.status(response.statusCode).send('There was a problem removing the event');
        } else if(!event) {
            return response.status(response.statusCode).send('No matching event found');
        } else {
            return response.status(response.statusCode).send(`Event "${event.eventName}" successfully removed`);
        }
    });
});



// Export router
module.exports = router;

