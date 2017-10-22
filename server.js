var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var category = require('./server/routes/category');
var product = require('./server/routes/product');

mongoose.connect('mongodb://senenkovitalik:3akp1RoxACDcaYo1@academy-shard-00-00-0myio.mongodb.net:27017,academy-shard-00-01-0myio.mongodb.net:27017,academy-shard-00-02-0myio.mongodb.net:27017/test?ssl=true&replicaSet=Academy-shard-0&authSource=admin');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We successfully connect to MongoDB Atlas");
});

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // this is used for parsing the JSON object from POST

app.use(express.static('static/img'));

app.use('/product', product);

app.use('/category', category);

app.post('/login/:login/:password', function(req, res) {
  var users = [
    { name: 'Vital', password: 'secret', role: 'user'},
    { name: 'admin', password: 'admin', role: 'admin'}
  ];
  const login = req.params.login;
  const password = req.params.password;
  let logged = false;
  users.forEach(val => {
    if (val.name === login && val.password === password) {
      res.json(val);
      return logged = true;
    }
  });
  if (!logged) res.json(false);
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});