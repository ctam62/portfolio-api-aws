const router = require("express").Router();
const projectController = require("../controllers/project-controller");

router
    .route('/')
    .get(projectController.getAllProjects)
    .put(projectController.getProjectByTitle);

module.exports = router;
