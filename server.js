const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
const port = process.env.PORT || 1300;

const app = express();

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'client')));

app.get('/scrape', function(req, res) {
    var url = "http://games.espn.com/ffl/activestats?leagueId=1313111&teamId=3&filter=0";

    request(url, function(err, response, html) {
        // console.log(html);

        if(!err) {
            console.log("yo! no errors");
            $ = cheerio.load(html);
            // $('#playerTableContainerDiv').filter(function() {
            //     var data = $(this);
            //     console.log(data);
            // });
            $('table');
        }

        // console.log(cheerio);
    });
});

app.listen(port, function() {
    console.log("Listening on " + port);
});
