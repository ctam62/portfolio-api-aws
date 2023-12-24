const knex = require("knex")(require("../knexfile"));
const { handleError, handleNotFound } = require("../utils/errorHandlers");


const getAllProjects = async (_req, res) => {
    try {
        const projects = await knex('project');
        const subset = projects.map(({ id, title, images }) => ({ id, title, images }));

        res.status(200).json(subset);
    } catch (error) {
        handleError(res, `Error getting projects: ${error}`);
    }
};

const getProjectByTitle = async (req, res) => {
    const projectTitle = req.body.title;

    try {
        const project = await knex('project').where('title', projectTitle).first();
        if (!project) {
            return handleNotFound(res, `Project with Title ${projectTitle} not found.`);
        }
        const { created_at, updated_at, ...projectData } = { ...project };
        res.status(200).json(projectData);
    } catch (error) {
        handleError(res, `Error getting project: ${error}`);
    }
}

module.exports = {
    getAllProjects,
    getProjectByTitle
};