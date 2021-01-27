const express = require('express');
const morgan = require('morgan');

const app = express();

module.exports = app;

app.use(morgan('combined'));

app.use('/foli', require('lametric-foli'));
app.use('/ilta-sanomat', require('lametric-iltasanomat'));
app.use('/yle', require('lametric-yle'));
