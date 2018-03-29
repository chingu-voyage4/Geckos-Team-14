'use strict';

// Require Mongoose
const mongoose = require('mongoose');
// Require mLab cred.
const mLab = require('./mLab.json');


// Connect mongoose to db
const db = mongoose.connect(`mongodb://${mLab.user}:${mLab.pass}@ds251435.mlab.com:51435/codemeets`);


module.exports = db;
