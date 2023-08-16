import { useState } from 'react';
import './App.css';
import Header from './components/Header/header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg/index.js';
import Equipos from './components/Equipos';
import Footer from './components/Footer';
import { v4 as uuid } from 'uuid'


function App() {

  const [mostrarForm, updateForm] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/JoelMbatista.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrollador de software e instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false}
  ]);

  const [Equipo, actualizarEquipo] = useState([

    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario:"#D9F7E9"
    }, 
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario:"#E8F8FF"
    }, 
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario:"#F0F8E2"
    }, 
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario:"#FDE7E8"
    }, 
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario:"#FAE9F5"
    }, 
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario:"#FFF5D9"
    }, 
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario:"#FFEEDF"
    }  

]);

//mostrar o no formulario
  const ShowForm = () => {
    updateForm(!mostrarForm);
  }


//Registrar colaborador
  const registrarColaborador = (colaborador)=>{
  console.log("muestra los ", colaborador)
  //spread operator
  actualizarColaboradores([...colaboradores, colaborador])
}

//Actualizar color
const actualizarColor = (color, id) =>{
  console.log("color actualizado", color, id)
  const colorActualizado = Equipo.map((equipo) => {
    if (equipo.id === id) {
      equipo.colorPrimario = color      
    }
      return equipo
  })
  actualizarEquipo(colorActualizado);
}

//Eliminar colaborador
const eliminarColaborador = (id) => {
  const deleteColaborador = colaboradores.filter((colaborador) => colaborador.id !== id)
  actualizarColaboradores(deleteColaborador)
}

//Crear nuevo equipo
const crearNuevoEquipo =(nuevoEquipo)=> {
  console.log(nuevoEquipo)
  actualizarEquipo([...Equipo, {...nuevoEquipo, id: uuid()}])
}

//funcion de like 
const like = (id) => {
  console.log("like", id)
  const likeActualizado = colaboradores.map((colaborador) =>{
    if (colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })

  actualizarColaboradores(likeActualizado)
}

  return (
    <div>
      <Header />

      {mostrarForm === true ? <Formulario 
      equipos = {Equipo.map((equipos)=> equipos.titulo)}
      registrarColaborador={registrarColaborador}
      crearNuevoEquipo = {crearNuevoEquipo}
      /> : <></>}
      <MiOrg ShowForm = {ShowForm}/> 
      {
        Equipo.map((equipo)=>{
          return <Equipos 
          data = {equipo} 
          key = {equipo.titulo}
          colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          like= {like}
          />
        })
      }

    <Footer />
    </div>
  );
}

export default App;
