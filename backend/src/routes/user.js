const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Post = require('../models/Post')

const router = express.Router()

router.post('/register', async (request, response) => {
    try {
        const existingUser = await User.findOne({username: request.body.username})
        if (existingUser) {
            response.status(403).json({message: 'Username already in use'})
            return
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

router.post('/login', async (request, response) => {
    try {
        const user = await User.findOne({username: request.body.username})
        if (!user) {
            response.status(401).json({message: 'Login failed'})
        }
        else if (bcrypt.compareSync(request.body.password, user.password)) {
            const jwtPayload = {
                id: user._id,
                username: user.username
            }
            const token =jwt.sign(jwtPayload, process.env.SECRET, {expiresIn: '1d'})
            response.status(200).json({success: true, token: token})
        }
        else {
            response.status(401).json({message: 'Login failed'})
        }
    } catch (error) {
        response.status(500).json({error: 'Internal server error'})
    }
})

router.get('/:userId/countOfPost', async (request, response) => {
    try {
        const count = await Post.countDocuments({user: request.params.userId})
        response.json({count: count})
    } catch (error) {
        response.status(500).json({error: 'Internal server error'})
    }
})

module.exports = router