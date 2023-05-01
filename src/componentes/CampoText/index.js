import './CampoText.css'
const CampoText = (props)=>{
  const placeholderModif=`${props.placeholder}...`
    return   <div className="campo-texto">
          <label >{props.titulo}</label>
          <input placeholder={placeholderModif}/>
        </div>
    
}

export default CampoText