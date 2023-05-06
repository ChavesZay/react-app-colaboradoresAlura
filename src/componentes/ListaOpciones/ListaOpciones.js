import './ListaOpciones.css'

const ListaOpciones = (props) => {
    //Metodo Map: para recorrer el arreglo
    //Metodo map-> areglo.map( (equipo, index) =>{   index=posicion
//                return <option></option>
   // })
   /* const equipos = ['Programación',
                      'Front End',
                      'Data Science',
                      'Devops',
                      'UX y Diseño',
                      'Móvil',
                      'Innovación y Gestión'];*/
//{} ->Le indica a React que es código javascript dentro de html
//{equipos.map((equipo, indice)=> <option key={indice}>{equipo}</option>)}   ->Como se devuelve solo un documnet se puede hacer de esta forma mas directo

const manejarCambio=(e)=>{
    props.actualizarEquipo(e.target.value)
}

    return <div className="lista-opciones">
        <label>Equipos </label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            {props.equipos.map((equipo, indice)=>{
                return <option key={indice} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones