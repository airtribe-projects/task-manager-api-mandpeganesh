const express = require("express");
const router = express.Router();
const taskController = require("./controllers/tasks");

// Defining routes
router.get("/api/v1/tasks", taskController.get_all_tasks);
router.get("/api/v1/tasks/:id", taskController.get_task);
router.post("/api/v1/tasks", taskController.create_task);
router.put("/api/v1/tasks/:id", taskController.update_task);
router.delete("/api/v1/tasks/:id", taskController.delete_task);

module.exports = router;