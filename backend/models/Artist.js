const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema({
    name: String,
    albums: [String]
})