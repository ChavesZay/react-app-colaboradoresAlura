import { useState } from 'react'
import './App.css';
import header from './componentes/header/header.js';
import Form from './componentes/Form/Form.js'
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const equipos = [
    {
      titulo: 'Programación',
      colorPrimario: "#57C278 ",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: 'Front End',
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: 'Data Science',
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: 'Devops',
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: 'UX y Diseño',
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: 'Móvil',
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: 'Innovación y Gestión',
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ];
  const [mostrarForm, actualizarMostar] = useState(false)

  const [colaboradores, actualizarColaboradores] = useState([{
    nombre: "Jeanmarie",
    puesto: "Instructora",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    equipo: "Front End"
  }])

  //Ternaio --> condicion? seMuestra : noSeMuestra
  //condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostar(!mostrarForm)
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    //... significa que esta copiando los valores actuales y añade el nuevo valor
    actualizarColaboradores([...colaboradores, colaborador])
  }
  return (
    <div >
      {header()}
      {/*mostrarForm === true ? <Form /> : <></>  una forma de hacerlo*/}
      {mostrarForm && <Form
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador} />  /*Otra forma de hacerlo*/}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => {

          return <Equipo
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} />

        })
      }

      <Footer />
    </div>
  );
}

export default App;
