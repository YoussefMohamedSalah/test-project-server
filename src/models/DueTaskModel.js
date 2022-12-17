const mongoose = require('mongoose')

const DueTask = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a Title']
    },
    course: {
        type: String,
        required: [true, 'Please add a Course']
    },
    topic: {
        type: String,
        required: [true, 'Please add a Topic']
    },
    due_to:
    {
        type: String,
        required: [true, 'Please add a Due Date']
    },
    task_type:
    {
        type: String,
        required: [true, 'Please spacify task type']
    }

}, {
    timestamps: true,
})
module.exports = mongoose.model('due_task', DueTask)
