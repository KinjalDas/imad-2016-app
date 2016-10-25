var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/chat', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'chat.html'));
});

app.get('/contact_us', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact_us.html'));
});

app.get('/members_area', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'members_area.html'));
});

app.get('/ui/img_flower.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'img_flower.jpg'));
});

app.get('/ui/img_flower2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'img_flower2.jpg'));
});

app.get('/ui/img_chania.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'img_chania.jpg'));
});

app.get('/ui/img_chania2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'img_chania2.jpg'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`MY app listening on port ${port}!`);
});
