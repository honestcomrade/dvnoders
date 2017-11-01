var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

var count = 0;

app.listen(8080, function () {
  console.log('Node Server listening on port 8080')
})

app.get('/', function (req, res) {
  count++;
  fs.readFile('../public/dvnoders.html', 'utf8', function (err, data) {
  
    if (err) {
      return console.log(err);
    }

    res.send(data.replace('{{counter}}', count));
  });
});
