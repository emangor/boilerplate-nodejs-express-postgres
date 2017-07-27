const logger = require('../utils/logger');
const dbUtil = require('../utils/dbUtil');

/* 
 * sample query
 * @return server time
 */
module.exports.getTime = (callback) => {
    let sql = "SELECT NOW()";
    let data = [];
    dbUtil.sqlToDB(sql, data, function(err, result){
        if (err){
            logger.error(`getTime() error: ${err}`);  
            callback(err, null);
        } else {
            callback(null, result);
        }
    }); 
}

/* 
 * sample query using transactions
 * @return transaction success
 */
module.exports.sampleTransaction = (callback) => {
    let singleSql = "DELETE FROM TEST";
    let multiSql = "INSERT INTO TEST (testcolumn) VALUES ($1)";
    let singleData = [];
    let multiData = [['jeg'], ['elsker'], ['smørrebrø']];
    dbUtil.getTransaction(function(err, client, done) {
        if (err) {
            logger.error(`sampleTransaction() error: ${err}`);
            callback(err);
        } else {
            dbUtil.sqlExecSingleRow(client, singleSql, singleData, function(err, dbResult){
                if (err) {
                    logger.error(`sampleTransaction() sqlExecSingleRow() error: ${err}`);
                    done();
                    callback(err);
                } else {
                    dbUtil.sqlExecMultipleRows(client, multiSql, multiData, function (err, dbResult) {
                        if (err) {
                            dbUtil.rollback(client, done);
                            callback(err);
                        } else {
                            dbUtil.commit(client, done);
                            logger.info(`sampleTransaction success`);
                            callback(null, 'transaction success');
                        }
                    });
                }
            });
        }
    }); 
}
