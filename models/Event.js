'use strict';

// require npm modules
const mongoose = require('mongoose');


// create mongoose Schema for Event
const EventSchema = new mongoose.Schema({
    eventOwner: {
        type: String,
        required: true,
    },
    eventCreated: {
        type: Date,
        default: Date.now()
    },
    eventName: {
        type: String,
        required: true,
        trim: true
    },
    imageLink: {
        type: String,
        required: false
    },
    description: { 
        type: String,
        required: false,
        trim: true
    },
    date: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false,
    },
    venueName: {
        type: String,
        required: false
    },
    beginTime: {
        type: String, 
        required: false
    },
    endTime: {
        type: String,
        required: false
    },
    contactName: {
        type: String,
        required: false,
    },
    contactEmail: {
        type: String,
        required: false,
        trim: true
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


// bind EventSchema to model 'Event'
const Event = mongoose.model('Event', EventSchema);

// export Event model
module.exports = Event;

