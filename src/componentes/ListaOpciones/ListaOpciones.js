import './ListaOpciones.css'

const ListaOpciones = () => {
    //Metodo Map: para recorrer el arreglo
    //Metodo map-> areglo.map( (equipo, index) =>{   index=posicion
//                return <option></option>
   // })
    const equipos = ['Programación',
                      'Front End',
                      'Data Science',
                      'Devops',
                      'UX y Diseño',
                      'Móvil',
                      'Innovación y Gestión'];
//{} ->Le indica a React que es código javascript dentro de html
//{equipos.map((equipo, indice)=> <option key={indice}>{equipo}</option>)}   ->Como se devuelve solo un documnet se puede hacer de esta forma mas directo
    return <div className="lista-opciones">
        <label>Equipos </label>
        <select>
            {equipos.map((equipo, indice)=>{
                return <option key={indice}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones