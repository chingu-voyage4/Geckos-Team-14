'use strict';

// Require mongoose
const mongoose = require('mongoose');


// Define Schema for events
const EventSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    eventCreated: {
        type: Date,
        default: Date.now()
    },
    eventName: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: false
    },
    description: { 
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    venueName: {
        type: String,
        required: false
    },
    beginTime: {
        type: String, 
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: false
    },
    mapLatitude: {
        type: String,
        required: false
    },
    mapLongitude: {
        type: String,
        required: false
    }
});


// Bind EventSchema layout to model name 'Event'
mongoose.model('Event', EventSchema);


// Export model
module.exports = mongoose.model('Event');
