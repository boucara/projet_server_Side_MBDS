const express  = require('express');
var path = require('path');
const app      = express();
const port     = process.env.PORT || 3000;
const server   = require('http').Server(app);


const mongoDBModule = require('./app_modules/crud-mongo');

// Pour les formulaires standards
const bodyParser = require('body-parser');

// Cette ligne indique le rÃ©pertoire qui contient
// les fichiers statiques: html, css, js, images etc.
app.use(express.static(path.join(__dirname, '../', 'app/public'))); // à changer pour le bon index
// ParamÃ¨tres standards du modyle bodyParser
// qui sert Ã  rÃ©cupÃ©rer des paramÃ¨tres reÃ§us
// par ex, par l'envoi d'un formulaire "standard"
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Lance le serveur avec express
server.listen(port);

console.log("Serveur lancÃ© sur le port : " + port);

//------------------
// ROUTES
//------------------
// Utile pour indiquer la home page, dans le cas
// ou il ne s'agit pas de public/index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../', 'app/public', 'index.html')); // à changer pour le bon index
});

// Ici des routes en :
// http GET (pour rÃ©cupÃ©rer des donnÃ©es)
// http POST : pour insÃ©rer des donnÃ©es
// http PUT pour modifier des donnÃ©es
// http DELETE pour supprimer des donnÃ©es

//----------------------------------------------
// Ces routes forment l'API de l'application !!
//----------------------------------------------

// Test de la connexion Ã  la base
app.get('/api/connection', function(req, res) {
    // Pour le moment on simule, mais aprÃ¨s on devra
    // rÃ©ellement se connecte Ã  la base de donnÃ©es
    // et renvoyer une valeur pour dire si tout est ok
    mongoDBModule.connexionMongo(function(err, db) {
        let reponse;

        if(err) {
            console.log("erreur connexion");
            reponse = {
                msg: "erreur de connexion err=" + err
            }
        } else {
            reponse = {
                msg: "connexion Ã©tablie"
            }
        }
        res.send(JSON.stringify(reponse));

    });
});
