import "./listaOpciones.css";
const ListaOpciones = (props) => {
   
    const manejarCambio =(e)=> {
        props.actualizarEquipo(e.target.value)
    }
    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>

                <option value={""} 
                defaultValue=""
                hidden>Seleccionar equipo</option>

                {props.option.map((option, index)=>
                     <option key={index} value={option}>{option}</option>
                )}    
            </select>
        </div>
    )
}

export default ListaOpciones;