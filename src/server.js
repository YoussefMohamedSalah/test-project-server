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
// ----
// app.use(Announcement)
// app.use(DueTask)
app.use(require("./routes/Announcement.js"));
app.use(require("./routes/DueTask.js"));

