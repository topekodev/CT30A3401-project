const express = require('express')
const userRouter = require('./src/routes/user')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/user', userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})