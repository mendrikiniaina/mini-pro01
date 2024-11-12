const express = require('express');
const ejs = require('ejs');
const app = express();

// Importer et utiliser le routeur `users`
const usersRoute = require('./routes/users');


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


app.use('/users', usersRoute);

// Démarrer le serveur
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Serve les fichiers statiques à partir du répertoire 'public'
app.use(express.static('public'));

