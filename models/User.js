'use strict';

// require npm modules
const mongoose = require('mongoose');


// create mongoose Schema for User
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }
});


// bind UserSchema to model 'User'
const User = mongoose.model('User', UserSchema);

// export User model
module.exports = User;

