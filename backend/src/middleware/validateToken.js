const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const validateToken = (request, response, next) => {
    const token = request.header('authorization')?.split(' ')[1]

    if (!token) {
        response.status(401).json({message: 'Token not found'})
    }
    else {
        try {
            const verified = jwt.verify(token, process.env.SECRET)
            request.user = verified
            next()
        } catch (error) {
            response.status(401).json({message: 'Access denied.'})
        }
    }
}

module.exports = validateToken