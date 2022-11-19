const mongoose = require('mongoose');
const Model = mongoose.model('trips');

//GET: /trips - Lists all the trips
const tripsList = async (req, res) =>{
    Model
        .find({}) //Empty filter for all
        .exec((err, trips) => {
            if (!trips){
                return res
                    .status(404)
                    .json({"message":"trips not found"});
            } else if (err){
                return res
                    .status(404)
                    .json(err);
            }else{
                return res
                    .status(200)
                    .json(trips);
            }
        });
           
};

// GET /trips/:tripCode - Returns a single trip
const tripsFindByCode = async (req, res) =>{
    Model
        .find({'code': req.params.tripCode}) //Empty filter for all
        .exec((err, trip) => {
            if (!trip){
                return res
                    .status(404)
                    .json({"message":"trip not found"});
            } else if (err){
                return res
                    .status(404)
                    .json(err);
            }else{
                return res
                    .status(200)
                    .json(trips);
            }
        });
           
};

module.exports = {
    tripsList,
    tripsFindByCode
};