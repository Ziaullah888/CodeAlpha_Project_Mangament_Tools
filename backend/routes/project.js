var express = require("express");
const {
  createProject,
  getProjects,
  getSingleProject,
  updateProject,
  deleteProject,
} = require("../controller/projectController");
var router = express.Router();

router.post("/", createProject);

router.get("/", getProjects);

router.get("/:id", getSingleProject);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

module.exports = router;
