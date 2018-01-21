var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var assert = require('assert');
var url = 'mongodb://localhost:27017/test';

exports.connexionMongo = function(callback) {
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        callback(err, db);
    });
};

exports.checkURL = function(req, res, callback) {
    MongoClient.connect(url, function(err, db) {
        if(!err) {
            // La requete mongoDB
            var myquery = { "url": req.params.url};
            db.collection("restaurants")
                .findOne(myquery, function(err, data) {
                    var reponse;

                    if(!err){
                        var result = data?false:true;
                        reponse = {
                            succes: true,
                            result : result,
                            error : null,
                            msg:"Details de la vidéo envoyés"
                        };
                    } else{
                        reponse = {
                            succes: false,
                            error : err,
                            msg: "erreur lors du find"

                        };
                    }
                    callback(reponse);
                });
        } else {
            var reponse = reponse = {
                succes: false,
                error : err,
                msg: "erreur de connexion à la base"
            };
            callback(reponse);
        }
    });
};

exports.updateVideo = function(req, res, callback) {
    MongoClient.connect(url, function(err, db) {
        if(!err) {
            var myquery = { "_id": ObjectId(id)};
            var newvalues = {
                name : req.body.description,
                cuisine : req.body.legende
            };
            db.collection("restaurants")
                .updateOne(myquery, newvalues, function(err, result) {
                    if(!err){
                        reponse = {
                            succes : true,
                            result: result,
                            msg: "Modification réussie " + result
                        };
                    } else {
                        reponse = {
                            succes : false,
                            error : err,
                            msg: "Problème à la modification"
                        };
                    }
                    callback(reponse);
                });
        } else{
            var reponse = reponse = {
                succes: false,
                error : err,
                msg:"Problème lors de la modification, erreur de connexion."
            };
            callback(reponse);
        }
    });
};
