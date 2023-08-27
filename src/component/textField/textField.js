import "./textField.css"
const CampoTexto = (props) => {
    const secondPlaceHolder= `${props.placeholder}...`;
    return <div className="campo-texto">
        <label>{props.titulo.toUpperCase()}</label>
        <input placeholder={secondPlaceHolder}/>
    </div>
} 

export default CampoTexto;