const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    title: String,
    album: String,
    length: Number,
    albumArt: String,
    genre: {type: mongoose.SchemaTypes.ObjectId, ref: 'genre'},
    artist: { type: mongoose.SchemaTypes.ObjectId, ref: 'artist' }
})

const Song = mongoose.model('song', songSchema)

module.exports = Song