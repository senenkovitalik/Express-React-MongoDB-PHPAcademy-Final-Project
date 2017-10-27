const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const category = require('./routes/category');
const product = require('./routes/product');
const user = require('./routes/user');

mongoose.connect('mongodb://senenkovitalik:3akp1RoxACDcaYo1@academy-shard-00-00-0myio.mongodb.net:27017,academy-shard-00-01-0myio.mongodb.net:27017,academy-shard-00-02-0myio.mongodb.net:27017/test?ssl=true&replicaSet=Academy-shard-0&authSource=admin');
const db = mongoose.connection;
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

app.use('/users', user);

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});