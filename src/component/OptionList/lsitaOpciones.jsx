import "./listaOpciones.css";
const ListaOpciones = () => {
    const option = [
        "Progrmacion",
        "Frontend",
        "Data Science",
        "DevOps",
        "UX/UI",
        "Movil",
        "Innovacion y gestion"
    ]
    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select> 
                {option.map((option, index)=>{
                    return <option key={index}>{option}</option>
                })}    
            </select>
        </div>
    )
}

export default ListaOpciones;