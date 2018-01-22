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

exports.checkURL = function(params, callback) {
    MongoClient.connect(url, function(err, db) {
        if(!err) {
            // La requete mongoDB
            var myquery = { "url": params.url};
            db.collection("videos")
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

exports.updateVideo = function(body, callback) {
    MongoClient.connect(url, function(err, db) {
        if(!err) {
            var myquery = { "_id": ObjectId(id)};
            var newvalues = {
                name : body.description,
                cuisine : body.legende
            };
            db.collection("videos")
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
exports.findVideos = function(page, pagesize, callback) {
    MongoClient.connect(url, function(err, db) {
        console.log("pagesize = " + pagesize);
        console.log("page = " + page);
        var selection ={};
        if(!err){
            db.collection('videos')
                .find(selection)
                .skip(page*pagesize)
                .limit(pagesize)
                .toArray()
                .then(arr => callback(arr));
        }
        else{
            callback(-1);
        }
    });
};