'use strict';

// Require own module 'app'
const app = require('./app');


// Port for server to listen to
const port = process.env.PORT || 3000;

// Connect app to port => server
const server = app.listen(port, () => console.log(`Server is live on port ${port}`));
