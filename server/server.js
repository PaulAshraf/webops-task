const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();


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


