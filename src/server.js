const express = require('express')
const dotenv = require('dotenv').config()
var cors = require('cors')

const { Announcement } = require('./routes/Announcement')
const { DueTask } = require('./routes/DueTask')

const port = process.env.PORT

const app = express()
app.listen(port, () => console.log(`Server Running on port : ${port}`))

app.use(express.json())
app.use(cors())
// -----
app.use('/api/announcement', require('./routes/Announcement'))
app.use('/api/due_task', require('./routes/DueTask'))


