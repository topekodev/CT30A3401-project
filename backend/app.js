const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./src/routes/user')
const postRouter = require('./src/routes/post')

dotenv.config()

const app = express()
const port = 3000

const mongoDB = process.env.MONGODBURL
mongoose.connect(mongoDB)
mongoose.Promise = Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/user', userRouter)
app.use('/api/post', postRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})