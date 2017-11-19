const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

const fs = require('fs');
const http = require('http');
const https = require('https');

const category = require('./routes/category');
const product = require('./routes/product');
const user = require('./routes/user');
const order = require('./routes/order');

mongoose.connect('mongodb://senenkovitalik:3akp1RoxACDcaYo1@academy-shard-00-00-0myio.mongodb.net:27017,academy-shard-00-01-0myio.mongodb.net:27017,academy-shard-00-02-0myio.mongodb.net:27017/test?ssl=true&replicaSet=Academy-shard-0&authSource=admin');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We successfully connect to MongoDB Atlas");
});

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({
  cookie: {
    httpOnly: true,
    expires: new Date(Date.now() + 86400000),
    maxAge: 86400000, // 1d
    path: '/'
  },
  secret: 'keyboard cat'
}));

app.use((req, res, next) => {
  if (req.session.user) {
    // console.log('\n', 'User: ', req.session.user);
    // console.log('Session ID: ', req.session.id, '\n');
  } else {
    // console.log('\n' ,'User is not authorized');
    // console.log('Session ID: ', req.session.id, '\n');
    req.session.user = {
      role: 'anonymous',
      data: {}
    }
  }
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // this is used for parsing the JSON object from POST

app.use(express.static('server'));
app.use(express.static('static/img'));

app.use('/product', product);

app.use('/category', category);

app.use('/users', user);

app.use('/orders', order);

const options = {
  key: fs.readFileSync('server/ssl/key.pem'),
  cert: fs.readFileSync('server/ssl/cert.crt')
};

https.createServer(options, app).listen(443);

http.createServer(function (req, res) {
  console.log("Redirect to https");
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(80);