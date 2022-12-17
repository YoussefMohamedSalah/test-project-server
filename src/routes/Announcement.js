const express = require('express')
const router = express.Router()
const { getAnnouncements } = require('../controllers/annaouncementController')


router.get('/', async (req, res) => {
    res.status(200).json({ message: 'Get Annaouncement' })
})

router.post('/', async (req, res) => {
    res.status(200).json({ message: 'Post Annaouncement' })
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    res.status(200).json({ message: `Update Annaouncement with id : ${id}` })
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    res.status(200).json({ message: `Delete Annaouncement with id : ${id}` })
})

module.exports = router;

