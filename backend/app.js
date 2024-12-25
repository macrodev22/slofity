const express = require('express')
require('dotenv').config()

const webRoutes = require('./routes')

const app = express()
app.use(express.json())
app.use(express.static('public'))

app.use(webRoutes)

module.exports = app