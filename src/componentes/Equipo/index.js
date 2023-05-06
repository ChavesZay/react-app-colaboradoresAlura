import Colaborador from "../Colaborador";
import "./Equipo.css"


const Equipo = (props) => {
    const { titulo, colorPrimario, colorSecundario } = props.datos
    const { colaboradores } = props;
    const estiloTitulo = { borderColor: colorPrimario };
    //  colaboradores>0?
    return <>{
        colaboradores.length > 0 &&
        <section className="equipo" style={{ backgroundColor: colorSecundario }}>
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} />)
                }

            </div>
        </section>
    }</>
}

export default Equipo