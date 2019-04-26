var locations = require('../models/locations');
var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

module.exports.reviewsList = function(req, res) {
    return res
    .status(200)
    .send({message: 'reviewsList',
            locationid: req.params.locationid});
};

module.exports.reviewsFindById = function(req, res) {
    return res
    .status(200)
    .send({message: 'reviewsFindById',
            locationid: req.params.locationid,
            reviewid: req.params.reviewid});
};

module.exports.reviewsUpdate = function(req, res) {
    return res
    .status(200)
    .send({message: 'reviewsUpdate',
            locationid: req.params.locationid,
            reviewid: req.params.reviewid});
};

module.exports.reviewsCreate = function(req, res) {
    return res
    .status(201)
    .send({message: 'reviewsCreate',
            locationid: req.params.locationid});
};

module.exports.reviewsDelete = function(req, res) {
    return res
    .status(204)
    .send({message: 'reviewsDelete',
            locationid: req.params.locationid,
            reviewid: req.params.reviewid});
};