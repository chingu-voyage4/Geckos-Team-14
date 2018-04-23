'use strict';


// require npm modules
const jwt = require('jsonwebtoken');



// restricts access if not authenticated / logged in
const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        // verify jwt, store to variable and save in req. obj.
        const verified = jwt.verify(token, 'smurfsAreBlue');
        req.userData = verified;
        next();

    } catch (error) {
        return res.status(401).json({ message: 'Auth failed.' });
    }
};


module.exports = checkAuth;
