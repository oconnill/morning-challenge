var express = require('express')
var server = express()

server.use(express.static(__dirname + '/public'))
server.get('*', function (req, res, next) {
    // custom logger
    console.log('HELLO WORLD')
    next()
})




server.listen(8080, function () {
    console.log('The server is running')
})