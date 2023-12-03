import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IniciarSesion from "./modules/IniciarSesion";
import Home from "./modules/Home";
import Favoritos from "./modules/Favoritos";
import Eventos from "./modules/Eventos";
import Historial from "./modules/Historial";
import Asistidos from "./modules/Asistidos";
import VerMas from "./modules/VerMas";
import Perfil from "./modules/Perfil";
import Registro from "./modules/Registro";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} /> 
          <Route exact path="/iniciar-sesion" element={<IniciarSesion/>} /> 
          <Route exact path="/ver-mas/:id" element={<VerMas/>} />
          <Route exact path="/favoritos" element={<Favoritos/>} /> 
          <Route exact path="/eventos" element={<Eventos/>} /> 
          <Route exact path="/historial" element={<Historial/>} /> 
          <Route exact path="/asistidos" element={<Asistidos/>} /> 
          <Route exact path="/perfil" element={<Perfil/>} /> 
          <Route exact path="/registro" element={<Registro/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
