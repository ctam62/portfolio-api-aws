require("dotenv").config();
const cors = require("cors");
const express = require("express");

const app = express();

const PORT = process.env.APP_PORT || 8080;

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || "https://claratam.vercel.app/" }));
app.use(express.static("./public/"));

const projectRoutes = require("./routes/project-routes");
app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
