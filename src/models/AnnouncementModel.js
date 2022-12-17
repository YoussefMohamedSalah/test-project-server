const mongoose = require('mongoose')

const Announcement = mongoose.Schema({
    teacher_name: String,
    subject: {
        type: String,
        required: [true, 'Please add a Subject']
    },
    message: {
        type: String,
        required: [true, 'Please add a message']
    },
    imageUrl: String
}, {
    timestapms: true,
})

module.exports = mongoose.model('announcement', Announcement)
