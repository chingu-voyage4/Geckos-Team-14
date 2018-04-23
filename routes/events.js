'use strict';

// require npm modules
const express = require('express');
const jwt = require('jsonwebtoken');

// require own modules
const Event = require('../models/Event');
const checkAuth = require('../middleware/checkAuth');


// create express router
const router = express.Router();



/* ROUTE HANDLERS */

// GET /events - find & return all events, sorted in desc. order (newest 1st)
router.get('/', (req, res, next) => {
    Event.find({}, null, { sort: { eventCreated: -1 }}, (err, events) => {
        // pass errors to error handler - if no errors, return either 'no event found', else send event
        if (err) {
            return next(err);
        } else if (!events) {
            return res.status(404).json({ message: 'No events found.' });
        } else {
            return res.status(200).send(events);
        }
    });
});


// GET /events/:id - find & return one event
router.get('/:id', (req, res, next) => {
    Event.findById(req.params.id, (err, event) => {
        if (err) {
            return next(err);
        } else if (!event) {
            return res.status(404).json({ message: 'No matching event found.' });
        } else {
            return res.status(200).json({ event });
        }
    });
});


// POST /events - create & return new event
router.post('/', checkAuth, (req, res, next) => {

    // create obj. with event input data
    const eventData = {
        eventOwner: req.userData.userId,
        eventName: req.body.eventName,
        imageLink: req.body.imageLink,
        description: req.body.description,
        date: req.body.date,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        venueName: req.body.venueName,
        beginTime: req.body.beginTime,
        endTime: req.body.endTime,
        contactName: req.body.contactName,
        contactEmail: req.body.contactEmail,
        mapLatitude: req.body.mapLatitude,
        mapLongitude: req.body.mapLongitude
    };

    // create & return event
    Event.create(eventData, (err, event) => {
        if (err) {
            return res.status(500).json({ message: 'There was a problem registering the event.'});
            
        } else {
            return res.status(201).json({ event });
        }
    });
});


// PUT /events/:id - update and return an existing event
router.put('/:id', checkAuth, (req, res, next) => {
    Event.findById(req.params.id, (err, event) => {
        if (err) {
            return next(err);

        } else if (!event) {
            return res.status(404).json({ message: 'No matching event found.' });

        } else {
            // check that user is eventOwner before updating
            if (req.userData.userId !== event.eventOwner) {
                return res.status(403).json({ message: 'Only the event owner can edit this event.' });

            } else {
                Event.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, event) => {
                    if (err) {
                        return res.status(500).json({ message: 'There was a problem updating the event.' });
                    
                    } else {
                        return res.status(201).json({ event });
                    }
                });
            }
        }
    });
});


// DELETE /events/:id
router.delete('/:id', checkAuth, (req, res, next) => {
    Event.findById(req.params.id, (err, event) => {
        if (err) {
            return next(err);

        } else if (!event) {
            return res.status(404).json({ message: 'No matching event found.' });
        
        } else {
            // check that user is eventOwner before deleting
            if (req.userData.userId !== event.eventOwner) {
                return res.status(500).json({ message: 'Only the event owner can remove this event.' });
            
            } else {
                Event.findByIdAndRemove(req.params.id, (err, event) => {
                    if (err) {
                        return res.status(500).json({ message: 'There was a problem removing the event.' });
                    
                    } else {
                        return res.status(200).json({ message: 'Event successfully removed!' });
                    }
                });
            }
        }
    })
});


// export router
module.exports = router;
