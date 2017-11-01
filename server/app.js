var express = require('express')
var path = require('path')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dvnoders.html'));  
})

app.listen(8080, function () {
  console.log('Node Server listening on port 8080')
})