import { useState } from "react";
import "./textField.css"
const Campo = (props) => {
    // const [valor, setValor] = useState("");

    // Destructuración
    const {type = "text"} = props;

    const manejarCambio = (e) => {
        /*
        para revisar elementos que vienen en un input 
        */
        // console.log("cambio: ", e.target.value);
        props.actualizar(e.target.value);
    }


    const secondPlaceHolder= `${props.placeholder}...`;
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo.toUpperCase()}</label>
        <input 
        placeholder={secondPlaceHolder} 
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        />
    </div>
} 

export default Campo; 