const express = require("express");
const router = express.Router();
const {
    getDueTasks,
    postDueTask,
    updateDueTask,
    deleteDueTask,
} = require("../controllers/dueTaskController");

// ## Another Way to clean Up some Code, the following

// way Number 1
router.route("/").get(getDueTasks).post(postDueTask);
router.route("/:id").put(updateDueTask).delete(deleteDueTask);

// way Number 2

// router.get('/', getDueTasks)

// router.post('/', postDueTask)

// router.put('/:id', updateDueTask)

// router.delete('/:id', deleteDueTask)

module.exports = router;
