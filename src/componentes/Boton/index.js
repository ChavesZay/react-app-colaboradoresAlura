import './Boton.css'


//Otra forma de obtener propiedades por medio de los 'children'
const Boton=(props)=>{
    return <button className='boton'>
        {props.children}
    </button>
}

export default Boton