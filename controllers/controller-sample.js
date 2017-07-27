const logger = require('../utils/logger');
const sampleModel = require('.././models/model-sample');

// sample controller
module.exports.getTime = (req, res) => {
    sampleModel.getTime(function(err, response){
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
    sampleModel.sampleTransaction(function(err, response){
        if(err){
            logger.error(`sampleTransaction error: ${err}`);
            res.status(500).json({status:'error', message:err, statusCode: 500});
        } else {
            res.status(200).json({status:'ok', message:response, statusCode: 200});
        }
    });
}
