const express = require('express'),
    jwt = require('jsonwebtoken'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    nodeMailer = require('nodemailer');

const app = express();
let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'starevents254@gmail.com',
        pass: 'events254'
    }
})

let mailOptions = {
    from: 'starevents254@gmail.com',
    to: 'mkkamau@cytonn.com',
    subject: 'Welcome to Node',
    text: 'Node can be able to send emails'
}


let shows = [
    {
        'id': 1,
        'name': 'Michael',
        'genre': 'Action',
        'cast': 'Phillip, Henry Clarcson',
        'rating': 1,
        'year': 2020,
        'image': 'http://www.alexanderbar.me/images/Captain.gif'
    },
    {
        'id': 2,
        'name': 'Michael',
        'genre': 'Action',
        'cast': 'Phillip, Henry Clarcson',
        'rating': 1,
        'year': 2020,
        'image': 'http://www.alexanderbar.me/images/Tinyworld-montage_09.jpg'
    },
    {
        'id': 3,
        'name': 'Michael',
        'genre': 'Action',
        'cast': 'Phillip, Henry Clarcson',
        'rating': 1,
        'year': 2020,
        'image': 'http://www.alexanderbar.me/images/captain-images/superheroes/centurion-small.gif'
    },
    {
        'id': 4,
        'name': 'Michael',
        'genre': 'Action',
        'cast': 'Phillip, Henry Clarcson',
        'rating': 1,
        'year': 2020,
        'image': 'http://www.alexanderbar.me/images/captain-images/superheroes/astro-man-small.gif'
    },
]
let users = [{'id': 1, 'name': "Michael", 'email': 'kamau.karitu@gmail.com'}]


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
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent' + info.response)
        }
    })
    res.json({
        message: shows
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
    let id = 1
    if (shows.length > 0) {
        id = shows[shows.length - 1].id + 1
    }
    let myObj = {
        'id': id,
        'name': req.body.name,
        'genre': req.body.genre,
        'cast': req.body.cast,
        'rating': parseInt(req.body.rating),
        'year': parseInt(req.body.year),
        'image': req.body.image
    };

    console.log(id);
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

app.post('/delete', (req, res) => {
    shows = shows.filter(function (el) {
        return el.id != req.body.id;
    });
    console.log(req.body.id)
    res.json({
        shows
    });
});

app.post('/api/login', (req, res) => {
    //mock user
    console.log(req.body)
    const user = {
        id: 1,
        username: 'Michael',
        password: 'mysecret'
    }
    if (req.body.username == "Michael" && req.body.password == "mysecret") {
        console.log("correct")
        jwt.sign({user: user}, 'mysecret', (err, token) => {
            res.json({
                token
            });
        });
    }else{
        res.sendStatus(401);
    }


});
app.post('/api/logout', (req, res) => {
    //mock user
    res.sendStatus(200);
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
