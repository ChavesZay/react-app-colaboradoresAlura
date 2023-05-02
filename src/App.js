import {useState} from 'react'
import './App.css';
import header from './componentes/header/header.js';
import Form from './componentes/Form/Form.js'
import MiOrg from './componentes/MiOrg';

function App() {
  const [mostrarForm, actualizarMostar]=useState(true)
  //Ternaio --> condicion? seMuestra : noSeMuestra
  //condicion && seMuestra
  const cambiarMostrar=()=>{
    actualizarMostar(!mostrarForm)
  }
    return (
    <div >
      {header() }
      {/*mostrarForm === true ? <Form /> : <></>  una forma de hacerlo*/}
      {mostrarForm && <Form />  /*Otra forma de hacerlo*/}
     <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
