const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    name: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post