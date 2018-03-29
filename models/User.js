'use strict';

// Require mongoose
const mongoose = require('mongoose');


// Define Schema for Users
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});


// Bind UserSchema to model name 'User'
mongoose.model('User', UserSchema);


// Export model 
module.exports = mongoose.model('User');

