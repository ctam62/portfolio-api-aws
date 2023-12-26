const router = require("express").Router();
const projectController = require("../controllers/project-controller");

router
    .route('/')
    .get(projectController.getAllProjects)
    .patch(projectController.getProjectByTitle);

module.exports = router;
