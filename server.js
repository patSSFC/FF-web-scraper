const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
const port = process.env.PORT || 1300;

const app = express();

app.use(express.static(path.join(__dirname, 'bower_components')));
app.listen(port, function() {
    console.log("Listening on " + port);
})
