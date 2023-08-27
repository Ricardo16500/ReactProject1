import './formulario.css';
import CampoTexto from '../textField/textField';
import ListaOpciones from '../OptionList/lsitaOpciones';
import Boton from '../buttom/buttom';

const Formulario = () => {
    return <section className='formulario'>
        <form>
            <h2>
                Rellena el Formulario para crear el colaborador. 
            </h2>
            <CampoTexto titulo= "Nombre" placeholder="Ingresar nombre"/>
            <CampoTexto titulo= "Puesto" placeholder="Ingresar puesto"/>
            <CampoTexto titulo= "Foto" placeholder="Ingresar enlace de su foto"/>
            <ListaOpciones/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario;