const express = require('express');
const routes = require('./routes');
const sendError = require('@helpers/sendError');

const app = express();

app.use(sendError)

app.use('/',routes)


module.exports = app