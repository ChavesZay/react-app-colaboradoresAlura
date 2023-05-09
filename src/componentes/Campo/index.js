import './Campo.css'

const Campo = (props)=>{

  const {type="text"}=props

const manejarCambio=(e)=>{
  props.actualizarValor(e.target.value)
}

  const placeholderModif=`${props.placeholder}...`
    return   <div className={`campo campo-${type}`}>
          <label >{props.titulo}</label>
          <input  placeholder={placeholderModif} 
          required={props.required}
          type={type} 
          value={props.valor}
          onChange={manejarCambio}

          />
        </div>
    
}

export default Campo