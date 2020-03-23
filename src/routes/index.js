const express = require('express');
const cors = require('cors');

// Middleware for security bridges
const helmet = require('helmet');
// zip HTTP requests
const compression = require('compression');
// Catch async exceptions
require('express-async-errors');


module.exports = function ({ HomeRoutes }) {
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());

    apiRoutes.use('/home', HomeRoutes);
    router.use('/v1/api', apiRoutes);

    return router;

}
