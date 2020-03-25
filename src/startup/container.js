// Creating a new container for dependency injection with awilix
const { createContainer, asClass, asValue, asFunction } = require('awilix');


// config
const config = require('../config');
const app = require('.')

// services
const { HomeService, UserService, SkillService, CommentService, AuthService } = require('../services');

// Controllers
const { HomeController, UserController, SkillController, CommentController, AuthController } = require('../controllers');

// Routes
const { HomeRoutes, UserRoutes, SkillRoutes, CommentRoutes, AuthRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

// Models
const { User, Comment, Skill } = require('../models');
// Repositories
const { UserRepository,SkillRepository, CommentRepository  } = require('../repositories');



const container = createContainer();

container.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    SkillService: asClass(SkillService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    AuthService: asClass(AuthService).singleton()
}).register({
    // why bind ? keeps the scope once express needs him
    HomeController: asClass(HomeController.bind(HomeController)),
    UserController: asClass(UserController.bind(UserController)),
    SkillController: asClass(SkillController.bind(SkillController)),
    CommentController: asClass(CommentController.bind(CommentController)),
    AuthController: asClass(AuthController.bind(AuthController))
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    SkillRoutes: asFunction(SkillRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton()
}).register({
    User: asValue(User),
    Skill: asValue(Skill),
    Comment: asValue(Comment)
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
    SkillRepository: asClass(SkillRepository).singleton()
})

module.exports = container;