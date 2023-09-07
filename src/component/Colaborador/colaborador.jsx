import "./colaborador.css";
import{AiFillCloseCircle} from "react-icons/ai";

const Colaborador = (props) => {
    const {name, puesto, photo, team, id } = props.datos;
    const {colorPrim, eliminarColaborador} = props;

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor: colorPrim}}>
            <img src={photo} alt={name}/>

        </div>
        <div className="info"> 
            <h4>{name}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
    //https://github.com/ricardo16500.png
}
export default Colaborador;