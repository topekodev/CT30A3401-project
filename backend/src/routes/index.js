const express = require('express')

const router = express.Router()

// Liveness probe: is the process up?
router.get('/healthz', (_req, res) => {
    res.status(200).json({ status: 'UP' })
})

// Readiness probe: can we talk to MongoDB?
router.get('/ready', async (_req, res) => {
    try {
      // Ping the admin database
      await client.db().admin().ping()
      res.status(200).json({ status: 'READY' })
    } catch (err) {
      res.status(503).json({
        status: 'NOT_READY',
        error: err.message,
      })
    }
})

module.exports = router