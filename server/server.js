const express  = require('express');
var path = require('path');
const app      = express();
const port     = process.env.PORT || 3000;
const server   = require('http').Server(app);


const mongoDBModule = require('./app_modules/crud-mongo');

// Pour les formulaires standards
const bodyParser = require('body-parser');

// Cette ligne indique le répertoire qui contient
// les fichiers statiques: html, css, js, images etc.
app.use(express.static(path.join(__dirname, '../', 'angular_client/client-video/dist/')));
// Paramètres standards du module bodyParser
// qui sert à  récupérer des paramètres reçus
// par ex, par l'envoi d'un formulaire "standard"
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

//------------------
// ROUTES
//------------------

// Ici des routes en :
// http GET (pour récupérer des données)
// http POST : pour insérer des données
// http PUT pour modifier des donnÃ©es
// http DELETE pour supprimer des données

//----------------------------------------------
// Ces routes forment l'API de l'application !!
//----------------------------------------------

// Test de la connexion à la base
app.get('/api/connection', function(req, res) {
    mongoDBModule.connexionMongo(function(err, db) {
        var reponse;

        if(err) {
            console.log("erreur connexion");
            reponse = {
                msg: "erreur de connexion err=" + err
            }
        } else {
            reponse = {
                msg: "connexion établie"
            }
        }
        res.send(JSON.stringify(reponse));

    });
});

// Check si l'url est déjà utilisé
// rend true si l'url est pas déjà stoké
app.get('/api/checkurl', function (req, res) {
    mongoDBModule.checkURL(req.params, function (response) {
        res.send(JSON.stringify(response));
    });
});

// Met à jour la vidéo
// rend un message de réussite si la mise à jour à réussie
// un message d'erreur sinon
app.put('/api/checkurl', function (req, res) {
    mongoDBModule.updateVideo(req.body, function (response) {
        res.send(JSON.stringify(response));
    });
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../', 'angular_client/client-video/dist/', 'index.html'));
});

// Lance le serveur avec express
server.listen(port);

console.log("Serveur lancÃ© sur le port : " + port);