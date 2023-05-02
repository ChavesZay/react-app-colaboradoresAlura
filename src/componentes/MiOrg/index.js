import {useState} from 'react'
import './MiOrg.css'
const MiOrg =(props)=>{
    //Estado - hooks
    //useState
    //useState()
    //const [nombreVariable, funcionActualiza]
    // const [nombre, actualizarNombre]=useState("Zaylin")
  /*  const [mostrar, actualizarMostar]=useState(true);
    const manejarClick=()=>{
        console.log(mostrar);
       actualizarMostar(!mostrar);
    }
    */
    return <section className='orgSection'>
        <h3 className='title'>Mi organización</h3>
        <img src='/img/add.png' alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg;