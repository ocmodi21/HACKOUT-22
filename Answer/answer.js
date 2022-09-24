var express = require('express');
var app = express();

var router1 = express.Router();
var router2 = express.Router();

router1.get('/home', function (req, res, next) {
    
    res.sendFile(__dirname+'/home.html');
});

router2.get('/ask', function (req, res, next) {
    
    res.sendFile(__dirname+'/ask.html');
});

app.use(router1);
app.use(router2);

app.listen(8080);