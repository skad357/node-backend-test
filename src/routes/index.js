const express = require('express');
const cors = require('cors');

// Middleware for security bridges
const helmet = require('helmet');
// zip HTTP requests
const compression = require('compression');
// Catch async exceptions
require('express-async-errors');

// Swagger
const swaggerUI = require('swagger-ui-express');
const { SWAGGER_PATH } = require('../config');
const swaggerDocument = require(SWAGGER_PATH);

const { ErrorMiddleware, NotFoundMiddleware } = require('../middlewares');

module.exports = function ({
    HomeRoutes,
    UserRoutes,
    SkillRoutes,
    CommentRoutes,
    AuthRoutes }) {

    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());

    apiRoutes.use('/home', HomeRoutes);
    apiRoutes.use('/user', UserRoutes);
    apiRoutes.use('/skill', SkillRoutes);
    apiRoutes.use('/commment', CommentRoutes);
    apiRoutes.use('/auth', AuthRoutes);

    router.use('/v1/api', apiRoutes);

    router.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument));
    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);


    return router;

}
