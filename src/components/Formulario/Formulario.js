import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../Lista-Opciones";
import Boton from "../Boton";

const Formulario = (props) => {
  const [name, updateName] = useState("");
  const [puesto, updatePuesto] = useState("");
  const [foto, updateFoto] = useState("");
  const [equipo, updateEquipo] = useState("");
  const [titulo, updateTitulo] = useState("");
  const [color, updateColor] = useState("");

  const{registrarColaborador, crearNuevoEquipo} = props

  const ManejadorEnvio = (event) => {
    event.preventDefault();

    let information = {
      name: name,
      puesto: puesto,
      foto: foto,
      equipo: equipo
    }


    registrarColaborador(information);
  }

  const ManejadorNuevoEquipo = (e) => {
  e.preventDefault();
  crearNuevoEquipo({titulo, colorPrimario: color})
  }

  return (
    <section className="formulario">
      <form onSubmit={ManejadorEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={name}
          actualizarValor={updateName}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={updatePuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={updateFoto}
        />
        <ListaOpciones valor={equipo} actualizarEquipo={updateEquipo} equipo={props.equipos}/>
        <Boton> Crear </Boton>
      </form>

      <form onSubmit={ManejadorNuevoEquipo}>
        <h2>Rellena el formulario para crear el nuevo equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={titulo}
          actualizarValor={updateTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar color en hex"
          required
          valor={color}
          actualizarValor={updateColor}
          type="color"
        />
         <Boton> Registrar equipo </Boton>
        </form>

    </section>
  );
};

export default Formulario;
