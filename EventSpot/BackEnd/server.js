const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/register.model');
const EventoModel = require('./models/event.model');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://administrador:00199122@cluster0.xggmuss.mongodb.net/EventSpot');

app.post('/register', async (req, res) => {
    try {
        const { carnet, nombreApellido, nacimiento, email, password } = req.body;

        // Verifica si el usuario ya existe
        const existingUser = await RegisterModel.findOne({ carnet: carnet });
        if (existingUser) {
            return res.status(400).json("La cuenta ya existe");
        }

        // Crea un nuevo usuario
        const newUser = await RegisterModel.create({
            carnet: carnet,
            nombreApellido: nombreApellido,
            nacimiento: nacimiento,
            email: email,
            password: password
        });

        res.status(200).json("Cuenta creada con exito");
    } catch (error) {
        console.error('Error al crear la cuenta', error);
        res.status(500).json("Error interno del servidor");
    }
});

app.post("/login", (req, res)=>{
    const {email, password} = req.body;
    RegisterModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){ 
                res.json({ status: 'success', carnet: user.carnet, nombreApellido: user.nombreApellido, nacimiento: user.nacimiento, email: user.email, password: user.password });
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.get('/eventos', async (req, res) => {
    try {
        const eventos = await EventoModel.find();
        res.status(200).json(eventos);
    } catch (error) {
        console.error('Error al obtener eventos:', error);
        res.status(500).json("Error interno del servidor");
    }
});

app.get('/eventos/:id', async (req, res) => {
    try {
      const eventId = req.params.id;
  
      // Busca el evento por su ID en la base de datos
      const evento = await EventoModel.findById(eventId);
  
      // Verifica si el evento existe
      if (!evento) {
        return res.status(404).json({ error: 'Evento no encontrado' });
      }
  
      // Retorna el evento encontrado
      res.status(200).json(evento);
    } catch (error) {
      console.error('Error al obtener el evento por ID', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });

app.listen(3001, () => {
    console.log("Server is Running");
});
