const asyncHandler = require("express-async-handler");

// importing Model
const Annaouncement = require("../models/AnnouncementModel");

// ## desc  get Announcements
// ## route GET /api/annaouncement
// ## access Public

const getAnnouncements = asyncHandler(async (req, res) => {
    const Announcements = await Annaouncement.find();
    res.status(200).json(Announcements);
});
// -----*-----*-----*-----*-----*-----*-----*-----*-----*

// ## desc  post Announcements
// ## route POST /api/annaouncement
// ## access Public

const postAnnouncement = asyncHandler(async (req, res) => {
    const { teacher_name, subject, message } = req.body;
    if (!message) {
        res.status(400);
        throw new Error("PLease Add A message ");
    }

    const annaouncement = await Annaouncement.create({
        teacher_name,
        subject,
        message,
    });

    res.status(200).json(annaouncement);
});
// -----*-----*-----*-----*-----*-----*-----*-----*-----*

// ## desc  update Announcements
// ## route PUT /api/annaouncement/:id
// ## access Public

const updateAnnouncement = asyncHandler(async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.status(400);
        throw new Error("Can Not Found Announcement");
    }

    // finding the Annaouncement By Id
    const annaouncement = await Annaouncement.findById(id);
    // cheking if there is a record by this id ,, if not throw new error
    if (!annaouncement) {
        res.sendStatus(400);
        throw new Error("Annaouncement Not Found");
    }

    // update Announcement
    const updatedAnnouncement = await Annaouncement.findByIdAndUpdate(
        id,
        req.body,
        // create New If record doesn't exists
        { new: true }
    );

    res.status(200).json(updatedAnnouncement);
});
// -----*-----*-----*-----*-----*-----*-----*-----*-----*

// ## desc  delete Announcements
// ## route DELETE /api/annaouncement/:id
// ## access Public

const deleteAnnouncement = asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(400);
        throw new Error("Can Not Found Announcement");
    }

    // finding the Annaouncement By Id
    const annaouncement = await Annaouncement.findById(id);

    // cheking if there is a record by this id ,, if not throw new error
    if (!annaouncement) {
        res.sendStatus(400);
        throw new Error("Annaouncement Not Found");
    }

    // deleteing Reacord If exists
    await annaouncement.remove();

    // responding By Id For Front end Usage
    res.status(200).json(id);
});
// -----*-----*-----*-----*-----*-----*-----*-----*-----*

module.exports = {
    getAnnouncements,
    postAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
};
