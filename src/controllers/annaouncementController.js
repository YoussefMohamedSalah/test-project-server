const getAnnouncements = (req, res) => {
    res.status(200).json({ message: 'Get Annaouncement' })
}

module.exports = {
    getAnnouncements,
}