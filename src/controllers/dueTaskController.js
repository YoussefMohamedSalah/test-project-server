const asyncHandler = require("express-async-handler");

// importing Model
const DueTask = require("../models/DueTaskModel");

// ## desc  get Due Tasks
// ## route GET /api/due_task
// ## access Public

const getDueTasks = asyncHandler(async (req, res) => {
    const DueTasks = await DueTask.find();
    res.status(200).json(DueTasks);
});
// -----*-----*-----*-----*-----*-----*-----*-----*-----*

// ## desc  post Due Task
// ## route POST /api/due_task
// ## access Public

const postDueTask = asyncHandler(async (req, res) => {
    const { title, course, topic, due_to, task_type } = req.body;
    if (!course) {
        res.status(400);
        throw new Error("PLease Add A Task Course");
    }

    const dueTask = await DueTask.create({
        title,
        course,
        topic,
        due_to,
        task_type
    });

    res.status(200).json(dueTask);
});
// -----*-----*-----*-----*-----*-----*-----*-----*-----*

// ## desc  update Due Task
// ## route PUT /api/due_task/:id
// ## access Public

const updateDueTask = asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(400);
        throw new Error("Can Not Found Task");
    }

    // finding the record By Id
    const dueTask = await DueTask.findById(id);
    // cheking if there is a record by this id ,, if not throw new error
    if (!dueTask) {
        res.sendStatus(400);
        throw new Error("Due Task Not Found");
    }

    // update Announcement
    const updatedDueTask = await DueTask.findByIdAndUpdate(
        id,
        req.body,
        // create New If record doesn't exists
        { new: true }
    );

    res.status(200).json(updatedDueTask);
});
// -----*-----*-----*-----*-----*-----*-----*-----*-----*

// ## desc  delete Due Task
// ## route DELETE /api/due_task/:id
// ## access Public

const deleteDueTask = asyncHandler(async (req, res) => {
    // finding the Annaouncement By Id
    const dueTask = await DueTask.findById(id);

    // cheking if there is a record by this id ,, if not throw new error
    if (!dueTask) {
        res.sendStatus(400);
        throw new Error("Due Task Not Found");
    }

    // deleteing Reacord If exists
    await dueTask.remove();

    // responding By Id For Front end Usage
    res.status(200).json(id);
});
// -----*-----*-----*-----*-----*-----*-----*-----*-----*

module.exports = {
    getDueTasks,
    postDueTask,
    updateDueTask,
    deleteDueTask,
};
