//server.js

//importing the necessary modules to use in the website
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3480;




app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//handles the get requests coming to the root url
app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("Hello World!"));
    res.end();

});
//handles the post requests sent to the server's shows url.
app.post('/shows', (req, res) => {

});



app.listen(port, () => console.log(`Schedule site is listening on port: ${port}!`));


