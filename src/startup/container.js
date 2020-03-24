// Creating a new container for dependency injection with awilix
const { createContainer, asClass, asValue, asFunction } = require('awilix');


// config
const config = require('../config');
const app = require('.')

// services
const { HomeService,UserService,SkillService,CommentService } = require('../services');

// Controllers
const { HomeController } = require('../controllers');

// Routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

// Models
const { User, Comment, Skill } = require('../models');
// Repositories
const { UserRepository, CommentRepository, SkillRepository } = require('../repositories');



const container = createContainer();

container.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    SkillService: asClass(SkillService).singleton(),
    CommentService: asClass(CommentService).singleton()
}).register({
    // why bind ? keeps the scope once express needs him
    HomeController: asClass(HomeController.bind(HomeController))
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
})
    .register({
        User: asValue(User),
        Skill: asValue(Skill),
        Comment: asValue(Comment)
    })
    .register({
        UserRepository: asClass(UserRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton(),
        SkillRepository: asClass(SkillRepository).singleton()
    })

module.exports = container;