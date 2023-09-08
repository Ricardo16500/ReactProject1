import "./equipo.css";
import Colaborador from "../Colaborador/colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props)=> {
    
    const {titulo, colorPrim, colorSec, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;

    const colores = {
        backgroundColor: hexToRgba(colorPrim,0.6)
    }
    const titleStyle = {borderColor: colorPrim}
  
    return  <>{colaboradores.length > 0  &&
        <section className="equipo" style={colores}>
        <input 
            className="input-color"
            type="color" 
            value={colorPrim}
            onChange={(event)=>{
                actualizarColor(event.target.value, id)
               
            }}
        
        />
        <h3 style={titleStyle}>
            {titulo}
        </h3>
        <div className="colaboradores"> 
           {
           colaboradores.map((colaborador, index)=> 
           <Colaborador datos={colaborador} key={index}
           colorPrim = {colorPrim}
           eliminarColaborador={eliminarColaborador}
           like={like}
           />)
           }
        </div>
    </section>} 
    </>
}

export default Equipo;