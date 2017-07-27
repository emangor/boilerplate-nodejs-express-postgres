const package = require('.././package');

module.exports.healthcheck = (req, res) => {
    res.json({
        status: 'ok',
        uptime: process.uptime(),
        name: package.name, 
        version: package.version
    });  
}
