var express = require('express');
var app = express();

app.use(express.static('static'));
app.use(express.static('dist/js'));
app.use(express.static('lib'));

app.use('/admin', function(req, res) {
  res.sendFile(__dirname+"/static/admin_panel.html");
});

app.use('/', function(req, res) {
  res.sendFile(__dirname + "/static/index.html");
});

app.listen(3000, function() {
  console.log("Server is running on http://127.0.0.1:3000");
});