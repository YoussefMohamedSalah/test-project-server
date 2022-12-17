const express = require('express')


const router = express.Router()
router.post('/api/announcement', async (req, res) => {
    // return res.json()
    return console.log('post done')
})

router.get('/api/announcement', async (req, res) => {
    // return res.json()
    return console.log('get done')
})

module.exports = router;
