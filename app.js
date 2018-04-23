'use strict';


// import npm modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');


// import own modules
// const mLab = require('./mLab-db.json'); // file 'mLab-db.json' not included here for sec. reasons
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const eventsRoutes = require('./routes/events');
const usersRoutes = require('./routes/users');



// create express app
const app = express();



/* DB, CORS, PARSE MIDDLEWARE */

// connect mongoose to mongo
// mongoose.connect(`mongodb://***********`); // DB info not included here for sec reasons
// save mongoose connection to variable to allow use with sessions (below) 
const db = mongoose.connection;
// listen for 'open' and 'error' events
db.once('open', () => console.log('MongoDB connected!'));
db.on('error', err => console.error(err));



// allow CORS on all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    // /* NOT ESSENTIAL */ - logic to grant 'pre-flight' requests permission - HTTP method 'OPTIONS'
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        return res.status(200).json({});
    } 

    return next();
});


// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// parse cookies
app.use(cookieParser());



/* ROUTES */

// connect routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/events', eventsRoutes);
app.use('/users', usersRoutes);


// catch 404 and forward to handler - fall through after all other routes
app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    return next(err);
});



/* ERROR HANDLER */

// error handler - last app.use callback
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});


// export app - used in server
module.exports = app;
