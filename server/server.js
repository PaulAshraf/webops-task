const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function (req, res) {
    res.sendFile('welcome.html', {root: __dirname })
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('photos'))
app.use(express.static('data'))

const port = 8080;
app.listen(port, function () {
   console.log("listening on port " + port)
})


