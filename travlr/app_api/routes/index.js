const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
//const auth = jwt({
//    secret: process.env.JWT_SECRET,
//    userProperty: 'payload',
//    algorithms: ['RS256']
//});

//const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

//Create routes for testing the db
router
    .route('/trips')
    .get(tripsController.tripsList)
    //.post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    //.put(auth, tripsController.tripsUpdateTrip);
module.exports = router;