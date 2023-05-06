import { useState } from "react"
import "./Form.css"

import CampoText from "../CampoText"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton"

const Form=(props)=>{

    const [nombre, actualizarNombre]=useState("")
    const [puesto, actualizarPuesto]=useState("")
    const [foto, actualizarFoto]=useState("")
    const [equipo, actualizarEquipo]=useState("")

    const{registrarColaborador, equipos}=props;

    const manejarEnvio=(event)=>{
        event.preventDefault();
        let datosAEnviar= {
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo
        }

        registrarColaborador(datosAEnviar)
        //Aquí se puede llamar una funcionalidad para guardar datos como un fetch()
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
           
            <CampoText titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required={true}
             valor={nombre}  
            actualizarValor={actualizarNombre}/>

            <CampoText titulo="Puesto"
             placeholder="Ingresar puesto"
              required
              valor={puesto}  
              actualizarValor={actualizarPuesto}/>
           
            <CampoText titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto}  
            actualizarValor={actualizarFoto} />
            
            <ListaOpciones 
             valor={equipo}
              actualizarEquipo={actualizarEquipo}
              equipos={equipos} />
            <Boton>Crear</Boton>
        </form>
        </section>
}
//<Boton>Crear</Boton> ->Otra forma de enviar propiedades por los "children"


export default Form