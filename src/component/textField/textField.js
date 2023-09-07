import { useState } from "react";
import "./textField.css"
const CampoTexto = (props) => {
    // const [valor, setValor] = useState("");
    const manejarCambio = (e) => {
        /*
        para revisar elementos que vienen en un input 
        */
        // console.log("cambio: ", e.target.value);
        props.actualizar(e.target.value);
    }


    const secondPlaceHolder= `${props.placeholder}...`;
    return <div className="campo-texto">
        <label>{props.titulo.toUpperCase()}</label>
        <input 
        placeholder={secondPlaceHolder} 
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        />
    </div>
} 

export default CampoTexto; 