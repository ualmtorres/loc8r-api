var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations');
var ctrlReviews = require('../controllers/reviews');

/* Locations pages */
router.get('/locations/findOne', ctrlLocations.findOne);

router.get('/locations', ctrlLocations.locationsList);
router.post('/locations', ctrlLocations.locationsCreate);
router.get('/locations/:locationid', ctrlLocations.locationsFindById);
router.put('/locations/:locationid', ctrlLocations.locationsUpdate);
router.delete('/locations/:locationid', ctrlLocations.locationsDelete);

router.get('/locations/:locationid/reviews', ctrlReviews.reviewsList);
router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsFindById);
router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdate);
router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDelete);

module.exports = router;