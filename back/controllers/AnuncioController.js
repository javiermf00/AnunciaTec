const Anuncio = require('../models/Anuncio')
var mongoose = require('mongoose')

exports.home = function (req, res) {
    res.render('index')
}

exports.bringanuncio = function (req, res) {
    console.log(mongoose.connection.readyState);
    Anuncio.find({ id: "1" }, function (err, result) {
        if (err) {
            console.log(err)
            return
        }
        res.json(result)
    })
}

exports.updateanuncio = function (req, res) {
    let newtexto = req.body;
    console.log(newtexto);
    const filter = { id: "1" };
    const updated = { texto: newtexto.texto };

    Anuncio.findOneAndUpdate(filter, updated, function (err, result) {
        if (err) {
            console.log(err)
        }
        console.log("se logro")
    })
}

exports.createanuncio = function (req, res) {
    let id = req.body.id;
    let texto = req.body.texto;

    let new_text = new Anuncio({ id: id, texto: texto })
    Anuncio.add(new_text)
}