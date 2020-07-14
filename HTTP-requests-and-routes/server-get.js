/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// TODO-ROUTES!
/*
1) In the file server.js, create a GET route that uses the url /all and returns the JavaScript object named projectData.
*/
app.get('/all', function(req, res) {
  res.send(projectData);
});

/* Another solution
app.get('/all', sendData);
function sendData (request, response) {
response.send(projectData);
};
*/