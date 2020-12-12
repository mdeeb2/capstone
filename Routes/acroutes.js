const express = require('express')
const router = express.Router()

const accounts = require('../accounts')
router.post('/register', accounts.signup)
router.post('/login', accounts.login)


module.exports = router