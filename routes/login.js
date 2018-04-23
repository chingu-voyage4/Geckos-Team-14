'use strict';

// require npm modules
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// require own modules
const User = require('../models/User');


// create express router
const router = express.Router();



/* ROUTE HANDLER */

// POST /login - authenticate user with email & password, create session & assign user's _id to session 
router.post('/', (req, res, next) => {
    // check for both email & password
    if (req.body.email && req.body.password) {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (err) {
                return res.status(401).json({ message: 'Auth failed.' });

            } else if (!user) {
                return res.status(401).json({ message: 'Auth failed.' });
            
            } else {
                // check entered password against saved, hashed password
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    // sign jwt
                    const token = jwt.sign({ userId: user._id }, 'smurfsAreBlue', { expiresIn: '2h' });
                    // send status 200 response, userId & token to client
                    return res.status(200).json({ userId: user._id, token });

                } else {
                    return res.status(401).json({ message: 'Auth failed.' });
                }
            }
        });

    } else {
        return res.status(401).json({ message: 'Both email and password required.'});
    }
});


// export router - used in '../app'
module.exports = router;
