// Import the required modules [1]
////////////////////////////////////////////////////////////////////////
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

// Database configuration
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


// Create the Express Application [2]
////////////////////////////////////////////////////////////////////////
const app = express();

// Configure the server [3]
////////////////////////////////////////////////////////////////////////

// Parse requests of content-type - "application/x-www-form-urlencoded"
app.use(bodyParser.urlencoded({ extended: true }))

// Parse requests of content-type - "application/json"
app.use(bodyParser.json())

// Activate the CORS access on all routes
app.use(cors())

// Listening server port
var port = process.env.PORT || 3000;

// Define the routes [4]
////////////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
    res.json({
    "message": "This is a JSON response to a HTTP GET request."
    });
});

require('./app/routes/user.routes.js')(app);
require('./app/routes/description.routes.js')(app);


// Start the server with selected configuration [5]
////////////////////////////////////////////////////////////////////////

// Connect to the database
mongoose.connect(dbConfig.url, dbConfig.options)
    .then(() => {
        console.log("Connect to database: success!");
    }).catch(err => {
        console.log('Connect to database: failure!: ' + err);
        process.exit();
    });

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
   