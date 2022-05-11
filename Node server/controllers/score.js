const UserModel = require('../models/User');
require('dotenv').config({ path: '/.env' });

// Get all scores
exports.getScores = (req, res) => {
    UserModel.findOne( { _id: req.body._id})
    .then((scores) => {
       res.status(200).json(scores);
    })
    .catch((error) => {
        res.status(500).json({error});
    })
}

// Increment score 
// exports.updateScore = (req, res) => {
//     const updatedScore = {
//         score: req.body.score
//     };
// }