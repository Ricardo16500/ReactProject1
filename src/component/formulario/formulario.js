import { useState } from 'react';
import './formulario.css';
import CampoTexto from '../textField/textField';
import ListaOpciones from '../OptionList/lsitaOpciones';
import Boton from '../buttom/buttom';

const Formulario = (props) => {


    const [name, setName] = useState("");
    const [puesto, setPuesto] = useState("");
    const [photo, setPhoto] = useState("");
    const [team, setTeam] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");


    const{registrarColaborador, crearEquipo} = props

    const Envio = (e) => {
        e.preventDefault();
        let datosEnviar = {
            name,
            puesto, 
            photo,
            team
        }
        console.log(datosEnviar);
        registrarColaborador(datosEnviar);

    }
    const manejarEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo,  colorPrim: color});   
    }

    return <section className='formulario'>
        <form onSubmit={Envio}> 
            <h2>
                Rellena el Formulario para crear el colaborador. 
            </h2>

            <CampoTexto 
                titulo= "Nombre" 
                placeholder="Ingresar nombre" 
                required={true} 
                valor ={name} 
                actualizar={setName}/>

            <CampoTexto 
                titulo= "Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor ={puesto} 
                actualizar={setPuesto}/>

            <CampoTexto 
                titulo= "Foto" 
                placeholder="Ingresar enlace de su foto"
                required
                valor ={photo} 
                actualizar={setPhoto}/>

            <ListaOpciones 
            valor={team} 
            actualizarEquipo={setTeam}
            option = {props.option}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarEquipo}> 
            <h2>
                Rellena el Formulario para crear el equipo. 
            </h2>

            <CampoTexto 
                titulo= "Titulo" 
                placeholder="Ingresar Titulo" 
                required={true} 
                valor ={titulo} 
                actualizar={actualizarTitulo}/>

            <CampoTexto 
                titulo= "Color" 
                placeholder="Ingresar el color en HEX" 
                required
                valor ={color} 
                actualizar={actualizarColor}/>
            <Boton>
                Registrar equipo  
            </Boton>
        </form>
    </section>
}

export default Formulario;