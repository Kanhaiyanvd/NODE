const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const loginRoutes = require('./routes/login');

const msgRoutes = require('./routes/msg');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/',loginRoutes);

app.use('/',msgRoutes);



app.listen(3000);