import './CampoText.css'
const CampoText = (props)=>{


const manejarCambio=(e)=>{
  props.actualizarValor(e.target.value)
}

  const placeholderModif=`${props.placeholder}...`
    return   <div className="campo-texto">
          <label >{props.titulo}</label>
          <input placeholder={placeholderModif} 
          required={props.required} 
          value={props.valor}
          onChange={manejarCambio}
          />
        </div>
    
}

export default CampoText