import { useState } from 'react';
import './App.css';
import Header from './component/Header/header';
import Formulario from './component/formulario/formulario';
import MiOrg from './component/MiOrg/MiOrg'; 
import Equipo from './component/Equipo/equipo';
import Footer from './component/footer/footer';
import {v4 as uuid} from 'uuid';
 // {Header()} otra opcion para importar componentes
function App() {
  const [option, actualizarOption] = useState([
    {
      id: uuid(),
      titulo:"Programacion",
      colorPrim: "#57C278",
      colorSec: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Frontend",
      colorPrim: "#82CFFA",
      colorSec: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrim: "#A6D157",
      colorSec: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"DevOps",
      colorPrim: "#E06B69",
      colorSec: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX/UI",
      colorPrim: "#DB6EBF",
      colorSec: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Movil",
      colorPrim: "#FFBA05",
      colorSec: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovacion y gestion",
      colorPrim: "#FF8A29",
      colorSec: "#FFEEDF"
    }
  ]) 
  const [mostrarForm, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      team: "Frontend",
      photo: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      puesto: "Instructor"
     },
    { 
      id: uuid(),
      team:   "Programacion",
      photo: "https://github.com/genesysaluralatam.png",
      name:  "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora"
    },
    {
      id: uuid(),
      team: "UX/UI",
      photo:   "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam"
    },
    {
      id: uuid(),
      team:  "Programacion",
      photo :   "https://github.com/christianpva.png",
      name:  "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {
      id: uuid(),
      team:  "Innovacion y gestion",
      photo :   "https://github.com/JoseDarioGonzalezCha.png",
      name:  "Jose Gonzalez",
      puesto: "Dev FullStack"
    }
  ]);
  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarForm);
  }

  const registrarColaborador = (colaborador) => {
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //eliminar colaborador
  const eliminarColaborador = (id) =>{
    console.log("eliminado", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id )
    console.log(nuevosColaboradores);
    actualizarColaboradores(nuevosColaboradores);
  }

  const actualizarColor = (color, id) => {
    console.log("actualizado: ", color , id);
    const optionAct = option.map((option)=>{
      if(option.id === id){
        option.colorPrim = color;
      }
      return option;
    })

    actualizarOption(optionAct);   
  }




  return (
    <div className="App">

     <Header/>
     {/* { mostrarForm ?  <Formulario/> : <></>} */}
      {mostrarForm && <Formulario 
      option={option.map((option) => option.titulo)}
      registrarColaborador = {registrarColaborador}
      />  }
     <MiOrg cambiarMostrar={cambiarMostrar}/>

     {  
      option.map((option) => 
         <Equipo 
         datos={option} 
         key={option.titulo}
         colaboradores = {colaboradores.filter(colaborador => colaborador.team === option.titulo)}
         eliminarColaborador={eliminarColaborador}
         actualizarColor = {actualizarColor}
         />
      )
     }
    
    <Footer/>
    </div>
    
  );
}

export default App;
