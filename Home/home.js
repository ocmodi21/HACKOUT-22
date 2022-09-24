var express = require('express');
var app = express();

var router1 = express.Router();
var router2 = express.Router();

router1.get('/ask', function (req, res, next) {
    
    res.sendFile(__dirname+'/ask.html');
});

router2.get('/answer', function (req, res, next) {
    
    res.sendFile(__dirname+'/answer.html');
});

app.use(router1);
app.use(router2);

app.listen(8080);