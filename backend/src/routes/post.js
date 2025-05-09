const express = require('express')
const Post = require('../models/Post')
const validateToken = require('../middleware/validateToken')

const router = express.Router()

router.post('/:userId', validateToken, async (request, response) => {
    try {
        const post = new Post({
            name: request.body.name,
            user: request.params.userId
        })
        await post.save()
        response.status(200).json({message: 'Post saved successfully'})
    } catch (error) {
        response.status(500).json({error: 'Internal server error'})
    }
})

router.get('/:id', async (request, response) => {
    try {
        const post = await Post.findById(request.params.id)
        if (!post) {
            response.status(404).json({message: 'Post not found'})
            return
        }
        response.status(200).json({post: post})
    } catch (error) {
        response.status(500).json({error: 'Internal server error'})
    }
})

router.get('/', async (request, response) => {
    try {
        const posts = await Post.find({})
        if (!posts) {
            response.status(404).json({message: 'Posts not found'})
            return
        }
        response.status(200).json({posts: posts})
    } catch (error) {
        response.status(500).json({error: 'Internal server error'})
    }
})

module.exports = router