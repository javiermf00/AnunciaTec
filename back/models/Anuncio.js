const mongoose = require('mongoose')
let Schema = mongoose.Schema

let AnuncioSchema = new Schema({
    id: { type: String, required: true },
    texto: { type: String, required: true }
})

module.exports = mongoose.model('Anuncio', AnuncioSchema)