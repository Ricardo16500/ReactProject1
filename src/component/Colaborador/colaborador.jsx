import "./colaborador.css";
import{AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai";

const Colaborador = (props) => {
    const {name, puesto, photo, team, id, fav } = props.datos;
    const {colorPrim, eliminarColaborador, like} = props;

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor: colorPrim}}>
            <img src={photo} alt={name}/>

        </div>
        <div className="info"> 
            <h4>{name}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={()=> like(id)}/> : <AiOutlineHeart onClick={()=> like(id)}/> }
            
        </div>
    </div>
    //https://github.com/ricardo16500.png
}
export default Colaborador;