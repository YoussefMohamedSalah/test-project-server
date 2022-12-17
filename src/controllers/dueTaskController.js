// ## desc  get Due Tasks
// ## route GET /api/due_task
// ## access Public

const getDueTasks = (req, res) => {
    res.status(200).json({ message: 'Get Due Tasks' })
}
// -----*-----*-----*-----*-----*-----*-----*-----*-----*

// ## desc  post Due Task
// ## route POST /api/due_task
// ## access Public

const postDueTask = (req, res) => {
    const { title, course, topic, due_to } = req.body
    if (!course) {
        res.status(400)
        throw new Error('PLease Add A Task Course')
    }

    res.status(200).json({ message: 'Post Due Task' })
}
// -----*-----*-----*-----*-----*-----*-----*-----*-----*

// ## desc  update Due Task
// ## route PUT /api/due_task/:id
// ## access Public

const updateDueTask = (req, res) => {
    const id = req.params.id
    if (!id) {
        res.status(400)
        throw new Error('Can Not Found Task')
    }
    res.status(200).json({ message: `Update Due Task with id : ${id}` })
}
// -----*-----*-----*-----*-----*-----*-----*-----*-----*

// ## desc  delete Due Task
// ## route DELETE /api/due_task/:id
// ## access Public

const deleteDueTask = (req, res) => {
    const id = req.params.id
    if (!id) {
        res.status(400)
        throw new Error('Can Not Found Task')
    }
    res.status(200).json({ message: `Delete Due Task with id : ${id}` })
}
// -----*-----*-----*-----*-----*-----*-----*-----*-----*


module.exports = {
    getDueTasks,
    postDueTask,
    updateDueTask,
    deleteDueTask
}