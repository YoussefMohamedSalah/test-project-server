const express = require("express");
const router = express.Router();
const {
    getAnnouncements,
    postAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
} = require("../controllers/annaouncementController");

// ## Another Way to clean Up some Code, the following

// way Number 1
router.route("/").get(getAnnouncements).post(postAnnouncement);
router.route("/:id").put(updateAnnouncement).delete(deleteAnnouncement);

// way Number 2

// router.get('/', getAnnouncements)

// router.post('/', postAnnouncement)

// router.put('/:id', updateAnnouncement)

// router.delete('/:id', deleteAnnouncement)

module.exports = router;
