var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>')
})

app.listen(8080, function () {
  console.log('Node Server listening on port 8080')
})