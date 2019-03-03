const logger = require('./../utils/logger');
const sampleModel = require('./../models/model-sample');

// sample controller
module.exports.getTime = async (req, res) => {
    try {
        let result = await sampleModel.getTime();
        res.status(200).json(result.rows);
    } catch (error) {
        logger.error(`getTime error: ${error.message}`);
        res.status(500).json({status:'error', message: error.message, statusCode: 500});
    }
}

// sample controller using transaction
module.exports.sampleTransaction = async (req, res) => {
    try {
        let result = await sampleModel.sampleTransaction();
        res.status(200).json({status:'ok', message: result, statusCode: 200});
    } catch (error) {
        logger.error(`sampleTransaction error: ${error.message}`);
        res.status(500).json({status:'error', message: error.message, statusCode: 500});
    }
}
