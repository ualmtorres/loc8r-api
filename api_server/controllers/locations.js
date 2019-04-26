var locations = require('../models/locations');
var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

/* GET findOne */
module.exports.findOne = function(req, res) {
    Loc.findOne().exec( function (err, location) {
        //sendJSONresponse(res, 200, location);
        return res
        .status(200)
        .send(location);
        
    })
};

module.exports.locationsList = function(req, res) {
    Loc
    .find({}, function(err, locations) {
        if (err) {
            return res
            .status(400)
            .send({message: 'Error en la petición'})
        }
        else {
            if (!locations) {
                return res
                .status(200)
                .send({message: 'No locations found'})
            }
            else {
                return res
                .status(200)
                .send(locations);
            }
        }
    })
};

module.exports.locationsCreate = function(req, res) {
    return res
    .status(201)
    .send({message: 'locationsCreate'});
};

module.exports.locationsFindById = function(req, res) {
    Loc
    .findById(req.params.locationid)
    .exec(function(err, location) {
        if (err) {
            return res
            .status(404)
            .send({message: 'No location with this locationid'});
        } else {
            if (!location) {
                return res
                .status(400)
                .send({message: 'Bad request'});
            }
            else {
                return res
                .status(200)
                .send(location);
            }
        }
    });


    /*
    return res
    .status(200)
    .send({message: 'locationsFindById',
    locationid: req.params.locationid});
    */
};

module.exports.locationsUpdate = function(req, res) {
    return res
    .status(200)
    .send({message: 'locationsUpdate',
    locationid: req.params.locationid});
};

module.exports.locationsDelete = function(req, res) {
    return res
    .status(204)
    .send({message: 'locationsDelete',
    locationid: req.params.locationid});
};

