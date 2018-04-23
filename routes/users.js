'use strict';

// require npm modules
const express = require('express');
const bcrypt = require('bcryptjs');

// require own modules
const User = require('../models/User');
const Event = require('../models/Event');
const checkAuth = require('../middleware/checkAuth');


// create express router
const router = express.Router();



/* ROUTE HANDLERS */

// GET /users/:id/events - find & return a specified user's events, desc. sorted (newest 1st)
router.get('/:id/events', (req, res, next) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return next(err);
        
        } else if (!user) {
            return res.status(404).json({ message: 'No matching user found.' });
        
        } else {
            Event.find({ eventOwner: user._id }, null, { sort: { eventCreated: -1 }}, (err, usersEvents) => {
                if (err) {
                    return next(err);

                } else if (!usersEvents) {
                    return res.status(404).json({ message: 'No matching events found.' });

                } else {
                    return res.status(200).json({ usersEvents });
                }
            });
        }
    });
});


// PUT /users/:id - find & update a user's info. Can only be done with right password
router.put('/:id', checkAuth, (req, res, next) => {
    // check that user making request is user being requested
    if (req.userData.userId === req.params.id) {
        // find user profile corresponding to req.userData.userId (from jwt) as extra safeguard
        User.findById(req.userData.userId, (err, user) => {
            if (err) {
                return next(err);
            
            } else if (!user) {
                return res.status(404).json({ message: 'No matching user found.' });
            
            } else {
                // check that input password matches registered password
                if (bcrypt.compareSync(req.body.password, user.password)) {

                    // check if req.body includes newEmail field to update
                    if (req.body.newEmail) {
                        User.updateOne({ _id: req.userData.userId }, { email: req.body.newEmail }, (err, user) => {
                            if (err) {
                                return next(err);
                            
                            } else {
                                return res.status(201).json({ message: 'User info. successfully updated!' });
                            }
                        });
                    }

                    if (req.body.newPassword) {
                        User.updateOne({ _id: req.userData.userId}, { password: bcrypt.hashSync(req.body.newPassword, 10) }, (err, user) => {
                            if (err) {
                                return next(err);
                            } else {
                                return res.status(201).json({ message: 'User info. successfully updated!' });
                            }
                        });
                    }
                    
                } else {
                    return res.status(401).json({ message: 'Auth failed.' });
                }
            }
        });

    } else {
        return res.status(401).json({ message: 'Only the account owner can update this info.' });
    }
});


// POST /users/:id/delete
router.post('/:id/delete', checkAuth, (req, res, next) => {
    // check that user making request is also user being requested
    if (req.userData.userId === req.params.id) {
        // find user profile corresponding to req.userData.userId (from jwt) as extra safeguard
        User.findById(req.userData.userId, (err, user) => {
            if (err) {
                return next(err);
            
            } else if (!user) {
                return res.status(404).json({ message: 'No matching user found.' });
            
            } else {
                // check input password matches registered password.
                if (bcrypt.compareSync(req.body.password, user.password)) {

                    // find and delete user's events
                    Event.remove({ eventOwner: req.userData.userId }, (err, usersEvents) => {
                        if (err) {
                            return next(err);

                        } else {
                            // find and delete user from db - use _id sent in token (in Header)
                            User.findByIdAndRemove(req.userData.userId, (err, user) => {
                                if (err) {
                                    return next(err);
                                
                                } else {
                                    return res.status(200).json({ message: 'User successfully removed!' });
                                } 
                            });
                        }
                    });

                } else {
                    return res.status(401).json({ message: 'Auth failed.' });
                }
            }
        });

    } else {
        return res.status(401).json({ message: 'Only the account owner can delete this account.'});
    }
});


// export router - used in '../app'
module.exports = router;
