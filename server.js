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
        'image': 'http://www.alexanderbar.me/images/Captain.gif',
        'video': 'https://www.youtube.com/watch?v=Pre5W_0VYlk'
    },
    {
        'id': 2,
        'name': 'Michael',
        'genre': 'Action',
        'cast': 'Phillip, Henry Clarcson',
        'rating': 1,
        'year': 2020,
        'image': 'http://www.alexanderbar.me/images/Tinyworld-montage_09.jpg',
        'video': 'https://www.youtube.com/watch?v=Pre5W_0VYlk'
    },
    {
        'id': 3,
        'name': 'Michael',
        'genre': 'Action',
        'cast': 'Phillip, Henry Clarcson',
        'rating': 1,
        'year': 2020,
        'image': 'http://www.alexanderbar.me/images/captain-images/superheroes/centurion-small.gif',
        'video': 'https://www.youtube.com/watch?v=Pre5W_0VYlk'
    },
    {
        'id': 4,
        'name': 'Michael',
        'genre': 'Action',
        'cast': 'Phillip, Henry Clarcson',
        'rating': 1,
        'year': 2020,
        'image': 'http://www.alexanderbar.me/images/captain-images/superheroes/astro-man-small.gif',
        'video': 'https://www.youtube.com/watch?v=Pre5W_0VYlk'
    },
]
let subscribers = [{'id': 1, 'email': 'kamau.karitu@gmail.com', 'verString': "Michael"}]


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
        'image': req.body.image,
        'video': req.body.video
    };

    for(i=0; i<subscribers.length;i++){
        sendMail(subscribers[i].email, "New Movie Added", "The movie added is " + myObj.name + " To unsubscribe, follow the link http://localhost:5000/unsubscribe?id=" + myObj.id + "&&verToken=" + myObj.verString)
    }




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
    } else {
        res.sendStatus(401);
    }


});
app.post('/api/logout', (req, res) => {

    res.sendStatus(200);
});

app.post('/subscribe', (req, res) => {
    console.log(req.body);
    let id = 1
    if (subscribers.length > 0) {
        id = subscribers[subscribers.length - 1].id + 1
    }
    let myObj = {
        'id': id,
        'email': req.body.email,
        'verString': makeVerString(10)
    };
    console.log(myObj);
    subscribers.push(myObj);
    sendMail(myObj.email, "Welcome to the StarShows subscription list", "To unsubscribe, follow the link http://localhost:5000/unsubscribe?id=" + myObj.id + "&&verToken=" + myObj.verString)
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


///Function for generating verification string to manage subscribers

function makeVerString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//function to send an email to the subscribers
function sendMail(recipient, subject, text) {


    let mailOptions = {
        from: 'starevents254@gmail.com',
        to: recipient,
        subject: subject,
        text: text
    }


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent' + info.response)
        }
    })

}


//send Mail to user to confirm subscription
function confirmSubscriptionEmail() {

}

// eslint-disable-next-line no-console
app.listen(5000, () => console.log('server started on port 5000'));
