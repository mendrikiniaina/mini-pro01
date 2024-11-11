const express = require('express');
const ejs = require('ejs');
const server = express();

const port = 5500;
const hostname = 'localhost';

server.set('view engine', 'ejs');

// route
server.get('/', function(request, response){

    var helloWorldText = '<!doctype html><html><head></head><body><h1>Bonjour, bienvenue sur ma page</h1></body></html>';

    //response.send(helloWorldText);    
    // response.render('index', {})
    response.render('index', {});


});

server.get('/about', (request, response) => {
    response.send("About us");
});


server.listen(port, hostname, function(){

    console.log('Server running on port: ' + port);

});