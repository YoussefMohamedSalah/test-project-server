const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
    res.status(200).json({ message: 'Get DueTask' })
})

router.post('/', async (req, res) => {
    res.status(200).json({ message: 'Post DueTask' })
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    res.status(200).json({ message: `Update DueTask with id : ${id}` })
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    res.status(200).json({ message: `Delete DueTask with id : ${id}` })
})


module.exports = router;
