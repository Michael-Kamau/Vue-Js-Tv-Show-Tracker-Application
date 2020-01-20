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
        'name': 'Divergent',
        'genre': 'Action, Thriller, Intelligence',
        'cast': 'Brian Venon,Karma Havik',
        'rating': 5,
        'year': 2019,
        'image': 'http://9092.ultratv100.com:9090/movies/Batch219/Divergent%20%282014%29/Divergent%20%282014%29.jpg',
        'video': 'https://www.youtube.com/watch?v=sutgWjz10sM'
    },

    {
        'id': 2,
        'name': 'Love Aaj Kal',
        'genre': 'Romance, Comedy',
        'cast': 'Patel, Cynthia morgan',
        'rating': 2,
        'year': 2015,
        'image': 'http://www.ragranjani.com/images/slider-002.jpg',
        'video': 'https://www.youtube.com/watch?v=4QvqHwH_je8'
    },
    {
        'id': 3,
        'name': 'Trapped Model',
        'genre': 'Romance, Comedy',
        'cast': 'Winsley, Barbaric Heathen',
        'rating': 6,
        'year': 2011,
        'image': 'http://boudoirsalon.com/images/models/3480997_8353371.jpg',
        'video': 'https://www.youtube.com/watch?v=RuUSTEePjY4'
    },
    {
        'id': 4,
        'name': 'Michael Reborn',
        'genre': 'Action',
        'cast': 'Phillip, Henry Clarcson',
        'rating': 1,
        'year': 2017,
        'image': 'http://www.alexanderbar.me/images/captain-images/superheroes/astro-man-small.gif',
        'video': 'https://www.youtube.com/watch?v=Pre5W_0VYlk'
    },
    {
        'id': 5,
        'name': 'Lucifer',
        'genre': 'Action,Comedy, Thriller',
        'cast': 'Lucifer, Jaden',
        'rating': 2,
        'year': 2018,
        'image': 'http://www.ragranjani.com/images/screencapture-file-E-00_AVIJIT-00_CLIENTS-RAGRANJANI-ragweb-ragranjani-com-public_html-index-html-1520434866571.png',
        'video': 'https://www.youtube.com/watch?v=X4bF_quwNtw'
    },

    {
        'id': 6,
        'name': 'Hustlers',
        'genre': 'Action,Comedy, Thriller',
        'cast': 'Cardi B, Nicki Minaj',
        'rating': 1,
        'year': 2019,
        'image': 'https://www.readdork.com/images/article/Artist-Images/C/Cardi-B/_crop1500x1000/Cardi-B-Jorda-Frantzis-Press-Image-3.jpg',
        'video': 'https://www.youtube.com/watch?v=LUG2U-IxPx0'
    },
    {
        'id': 7,
        'name': 'Morbius',
        'genre': 'Action, Thriller',
        'cast': 'Phillip, Henry Clarcson',
        'rating': 3,
        'year': 2020,
        'image': 'http://www.alexanderbar.me/images/Captain.gif',
        'video': 'https://www.youtube.com/watch?v=R29CZvGVH4I'
    },
    {
        'id': 8,
        'name': 'Star Girl',
        'genre': 'Romance, Action, Family',
        'cast': 'Helen Richer, Mitchel Jones',
        'rating': 4,
        'year': 2018,
        'image': 'http://9092.ultratv100.com:9090/movies/Batch219/Kite%20%282014%29/Kite%20%282014%29.jpg',
        'video': 'https://www.youtube.com/watch?v=br-CdxgxAvY'
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

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://64.227.11.157');

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

    for(let i=0; i<subscribers.length;i++){
        sendMail(subscribers[i].email, "New Movie Added", "The movie added is " + myObj.name + " To unsubscribe, follow the link http://localhost:5000/unsubscribe?id=" + myObj.id + "&verString=" + myObj.verString)
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
    sendMail(myObj.email, "Welcome to the StarShows subscription list", "To unsubscribe, follow the link http://localhost:5000/unsubscribe?id=" + myObj.id + "&verString=" + myObj.verString)
});

app.get('/unsubscribe',(req,res)=>{


    try {
        console.log("To unsubscribe"+req.query['id'])

        for (let i=0; i<subscribers.length;i++) {
            if(subscribers[i].id==req.query['id'] && subscribers[i].verString==req.query.verString){
                subscribers = subscribers.filter(function (el) {
                    return el.id != req.query['id'];
                });

            }
        }

    }
    catch (e) {
        console.log("entering catch block");
        console.log(e);
        console.log("leaving catch block");
    }
    finally {
        console.log('finally')
        // res.writeHead(301,
        //     {Location: 'http://shows.app'}
        // );
        // res.end();
        res.redirect(301,'http://shows.appp');
    }







    console.log(subscribers)
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
