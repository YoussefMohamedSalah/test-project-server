const asyncHandler = require('express-async-handler')

// importing Model
const Annaouncement = require('../models/AnnouncementModel')

// ## desc  get Announcements
// ## route GET /api/annaouncement
// ## access Public

const getAnnouncements = asyncHandler(async (req, res) => {
    const Announcements = await Annaouncement.find()
    // if (!Announcements) {
    //     res.status(200).json({ message: 'No Announcements Yet' })
    // }

    res.status(200).json(Announcements)
})
// -----*-----*-----*-----*-----*-----*-----*-----*-----*

// ## desc  post Announcements
// ## route POST /api/annaouncement
// ## access Public

const postAnnouncement = asyncHandler(async (req, res) => {
    const { teacher_name, subject, message } = req.body
    if (!message) {
        res.status(400)
        throw new Error('PLease Add A message ')
    }

    res.status(200).json({ message: 'Post Annaouncement' })
})
// -----*-----*-----*-----*-----*-----*-----*-----*-----*

// ## desc  update Announcements
// ## route PUT /api/annaouncement/:id
// ## access Public

const updateAnnouncement = asyncHandler(async (req, res) => {
    const id = req.params.id
    if (!id) {
        res.status(400)
        throw new Error('Can Not Found Announcement')
    }
    res.status(200).json({ message: `Update Annaouncement with id : ${id}` })
})
// -----*-----*-----*-----*-----*-----*-----*-----*-----*

// ## desc  delete Announcements
// ## route DELETE /api/annaouncement/:id
// ## access Public

const deleteAnnouncement = asyncHandler(async (req, res) => {
    const id = req.params.id
    if (!id) {
        res.status(400)
        throw new Error('Can Not Found Announcement')
    }
    res.status(200).json({ message: `Delete Annaouncement with id : ${id}` })
})
// -----*-----*-----*-----*-----*-----*-----*-----*-----*


module.exports = {
    getAnnouncements,
    postAnnouncement,
    updateAnnouncement,
    deleteAnnouncement
}