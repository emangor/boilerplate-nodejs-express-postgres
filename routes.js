// talk back to parent (app.js) to get reference to express/app
express = module.parent.exports.express;
app = module.parent.exports.app;

const router = express.Router();  // init our express 4 router
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(router);  // tell the app this is the router we are using

const healthcheckController = require('./controllers/controller-healthcheck');
const sampleController = require('./controllers/controller-sample');
 
// healthcheck
router.get('/', healthcheckController.healthcheck);
router.get('/healthcheck', healthcheckController.healthcheck);

// sampleController routes
router.get('/servertime', sampleController.getTime);
router.get('/transaction', sampleController.sampleTransaction);
