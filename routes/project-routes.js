const router = require("express").Router();
const projectController = require("../controllers/project-controller");

router
    .route('/')
    .get(projectController.getAllProjects);

router
    .route('/:title')
    .get(projectController.getProjectByTitle);

module.exports = router;
