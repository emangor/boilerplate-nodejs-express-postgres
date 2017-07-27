config = {
    serviceName: process.env.SERVICENAME || 'boilerplate node express postgress app',
    port: process.env.PORT || 3000,
    loggerLevel: process.env.LOGGERLEVEL || 'debug',
    db: {
        user: process.env.DB_USER || '',
        database: process.env.DB || '',
        password: process.env.DB_PASS || '',
        host: process.env.DB_HOST || '',
        port: parseInt(process.env.DB_PORT) || 5432,
        max: parseInt(process.env.DB_MAX_CLIENTS) || 20,
        idleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT_MS) || 30000
    }    
}

module.exports = config;
