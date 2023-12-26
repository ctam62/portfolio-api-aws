require("dotenv").config();
const cors = require("cors");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.static("./public/"));

const projectRoutes = require("./routes/project-routes");
app.use("/api", projectRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
