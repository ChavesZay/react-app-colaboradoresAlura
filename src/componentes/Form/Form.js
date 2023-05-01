import "./Form.css"
import CampoText from "../CampoText"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton"

const Form=()=>{

    const manejarEnvio=(event)=>{
        event.preventDefault();
        console.log("Manejar el envio", event)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoText titulo="Nombre" placeholder="Ingresar nombre"/>
            <CampoText titulo="Puesto" placeholder="Ingresar puesto"/>
            <CampoText titulo="Foto" placeholder="Ingresar enlace de foto"/>
            <ListaOpciones  />
            <Boton>Crear</Boton>
        </form>
        </section>
}
//<Boton>Crear</Boton> ->Otra forma de enviar propiedades por los "children"


export default Form