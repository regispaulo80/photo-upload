const express = require('express');
const app = express();
const apiPort = 3333;
const routes = require('./routes');
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());
app.use(routes);
app.listen(apiPort);
app.use(bodyParser.json());