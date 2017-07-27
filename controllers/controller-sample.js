const logger = require('../utils/logger');
const userModel = require('.././models/model-sample');

// sample controller
module.exports.getTime = (req, res) => {
    userModel.getTime(function(err, response){
        if(err){
            logger.error(`getTime error: ${err}`);
            res.status(500).json({status:'error', message:err, statusCode: 500});
        } else {
            res.status(200).json(response);
        }
    });
}

// sample controller using transaction
module.exports.sampleTransaction = (req, res) => {
    userModel.sampleTransaction(function(err, response){
        if(err){
            logger.error(`sampleTransaction error: ${err}`);
            res.status(500).json({status:'error', message:err, statusCode: 500});
        } else {
            res.status(200).json({status:'ok', message:response, statusCode: 200});
        }
    });
}
