const express = require('express')
const User = require('../models/User')

const router = express.Router()

router.post('/register', async (request, response) => {
    try {
        const existingUser = await User.findOne({email: request.body.email})
        if (existingUser) {
            response.status(403).json({message: 'Username already in use'})
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(request.body.password, salt)
        await User.create({
            username: request.body.username,
            password: hash
        })
        response.status(200).json({message: 'User registered successfully'})
    } catch (error) {
        response.status(500).json({error: 'Internal server error'})
    }
})