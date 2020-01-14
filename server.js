const express = require('express'),
    jwt = require('jsonwebtoken'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path');

const app = express();
let shows = [
    {'id': 1, 'name': 'Michael', 'genre': 'Action','cast': 'Phillip, Henry Clarcson', 'rating': 1, 'year': 2020},
    {'id': 2, 'name': 'Michael', 'genre': 'Action','cast': 'Phillip, Henry Clarcson', 'rating': 1, 'year': 2020},
    {'id': 3, 'name': 'Michael', 'genre': 'Action','cast': 'Phillip, Henry Clarcson', 'rating': 1, 'year': 2020},
    {'id': 4, 'name': 'Michael', 'genre': 'Action','cast': 'Phillip, Henry Clarcson', 'rating': 1, 'year': 2020},
]


app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://shows.appp');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome too the API'
    });
});

app.post('/', (req, res) => {
    res.json({
        message: req.body
    });
});

app.get('/shows', (req, res) => {
    res.json({
        shows
    });
});

app.get('/test', (req, res) => {
    let length = shows.length
    res.json({
        length
    });
});

app.post('/addShow', (req, res, next) => {
    let myObj = { 'id': 5, 'name': req.body.name, 'genre': req.body.genre,'cast': req.body.cast, 'rating':parseInt(req.body.rating), 'year': parseInt(req.body.year) };
    console.log(myObj);
    shows.push(myObj);
    res.json({
        shows
    });
});

app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'mysecret', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'post created...',
                authData
            });
        }
    });


});

app.post('/api/login', (req, res) => {
    //mock user
    const user = {
        id: 1,
        username: 'Michael',
        password: 'mysecret'
    }
    jwt.sign({user: user}, 'mysecret', (err, token) => {
        res.json({
            token
        });
    });
});

//Where to verify the token
function verifyToken(req, res, next) {
    //Get the value of the bearer header
    const bearerHeader = req.headers['authorization'];
    //Check to see if the bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        //split at the space
        const bearer = bearerHeader.split(' ');
        //get the token from array
        const bearerToken = bearer[1];
        //set the token
        req.token = bearerToken;
        //Next middleware
        next();

    } else {
        res.sendStatus(403);
    }
}

// eslint-disable-next-line no-console
app.listen(5000, () => console.log('server started on port 5000'));
