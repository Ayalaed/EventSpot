const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    carnet: String,
    nombreApellido: String,
    nacimiento: String,
    email: String,
    password: String
})

const RegisterModel = mongoose.model("usuarios", RegisterSchema);
module.exports = RegisterModel;