const express = require('express')


const webRoutes = express.Router()

webRoutes.get('/home', (req, res) => {
    res.send('Hello at home')
})

module.exports = webRoutes