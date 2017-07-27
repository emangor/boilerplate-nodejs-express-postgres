const config = require( './config' );
const express = require('express');
module.exports.express = express;
const app = express();
module.exports.app = app;
const routes = require('./routes');
const logger = require('./utils/logger');
app.listen(config.port);
logger.info(`${config.serviceName} is listening on port: ${config.port}`);
