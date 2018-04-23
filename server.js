'use strict';

// require own express app
const app = require('./app');


// define server port
const port = process.env.PORT || 3000;

// app to listen on port
app.listen(port, () => console.log(`All systems go, on port: ${port}`));
