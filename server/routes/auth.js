const express = require('express')

const router = express.Router()

// Import from controllers
const { register } = require('../controllers/auth')

// The data to send after hitting endpoint
router.post('/register', register)


// module.exports is a special object that makes this module available to other modules
module.exports = router;