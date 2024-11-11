const express = require('express');
const ejs = require('ejs');
const app = express();

const port = 5500;
const hostname = 'localhost';

// Configurer EJS comme moteur de rendu de vues
app.set('view engine', 'ejs');

// Route principale
app.get('/', function (request, response) {
    const helloWorldText = '<!doctype html><html><head></head><body><h1>Bonjour, bienvenue sur ma page</h1></body></html>';
    response.render('index', { text: helloWorldText });
});

// Autres routes
app.get('/about', (request, response) => {
    response.send("About us");
});

app.get('/contact', (request, response) => {
    response.send("Contactez-nous");
});

// Importer et utiliser le routeur `users`
const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

// Démarrer le serveur
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
