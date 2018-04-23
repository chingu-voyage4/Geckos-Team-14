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

// POST /register - register new user, create session & assign user's _id to session
router.post('/', (req, res, next) => {
    // confirm all form fields filled
    if (req.body.email && req.body.password && req.body.confirmPassword) {

        // confirm passwords match
        if (req.body.password !== req.body.confirmPassword) {
            return res.status(400).json({ message: 'Passwords must match.'});

        } else {
            // check that no user account exists with matching email
            User.findOne({ email: req.body.email }, (err, user) => {
                if (err) {
                    return next(err);
                
                } else if (user) {
                    return res.status(409).json({ message: 'Registration failed - Email already registered.' });

                } else {
                    // register user. Create userData obj. with form input - NOTE: hashing password
                    const userData = {
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10)
                    };

                    // create new User in DB
                    User.create(userData, (err, user) => {
                        if (err) {
                            return next(err);

                        } else {
                            // sign jwt
                            const token = jwt.sign({ userId: user._id }, 'smurfsAreBlue', { expiresIn: '2h' });                      
                            // send status 200 response, userId & token to client
                            return res.status(201).json({ userId: user._id, token });
                        }
                    });
                }
            });
        }

    } else {
        return res.status(400).json({ message: 'All fields required.' });
    }
});


// export router - used in '../app'
module.exports = router;
