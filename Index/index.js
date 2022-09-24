var express = require('express');
var app = express();

var router1 = express.Router();
var router2 = express.Router();
var router3 = express.Router();
var router4 = express.Router();
var router5 = express.Router();
var router6 = express.Router();

router1.get('/', function (req, res, next) {
    res.sendFile(__dirname+'/index.html');
});

router2.get('/ask', function (req, res, next) {
    res.sendFile(__dirname+'/ask.html');
});

router3.get('/answer', function (req, res, next) {
    res.sendFile(__dirname+'/answer.html');
});

router4.get('/login', function(req,res,next) {
    res.sendFile(__dirname+'/login.html');
});

router5.get('/register', function(req, res, next){
    res.sendFile(__dirname+'/register.html');
});

router6.get('/home', function(req, res, next){
    res.sendFile(__dirname+'/home.html');
});

app.use(router1);
app.use(router2);
app.use(router3);
app.use(router4);
app.use(router5);
app.use(router6);

app.listen(8080);