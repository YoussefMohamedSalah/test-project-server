const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
var cors = require('cors')


const port = process.env.PORT

const app = express()
app.listen(port, () => console.log(`Server Running on port : ${port}`))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// -----

const connectToDataBase = require('./config/db')

// connected to data base

connectToDataBase()

// -----

app.use('/api/announcement', require('./routes/Announcement'))
app.use('/api/due_task', require('./routes/DueTask'))

app.use(errorHandler)


