const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    nombre: String,
    fecha: String,
    hora: String,
    descripcion: String,
    cupos: Number,
    carreras: String
})

const EventoModel = mongoose.model("eventos", RegisterSchema);
module.exports = EventoModel;