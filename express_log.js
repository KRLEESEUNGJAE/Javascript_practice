const express = require('express');
const app = express();

const myLogger = function (req, res, next) {
    console.log(`http request method is ${req.method}, url is ${req.url} `);
    next();
};

app.use(myLogger);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3001);