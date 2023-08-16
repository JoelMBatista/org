import "./equipos.css";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipos = (props) => {
  const { titulo, colorPrimario, colorSecundario, id } = props.data;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  const objColorPrimario = {
    borderColor: hexToRgba(colorPrimario, 0.6)
  };

  const objColorSecundario = {
    backgroundColor: hexToRgba(colorPrimario, 0.6)
  };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="Equipos" style={objColorSecundario}>
          <h3 style={objColorPrimario}>{titulo}</h3>
          <input type="color" className="input-color" value={colorPrimario} onChange={(evento) => {
            actualizarColor(evento.target.value, id);
          }}/>


          <div className="colaboradores">
            {colaboradores.map((colaboradores, index) => {
              return (
                <Colaborador
                  datos={colaboradores}
                  key={index}
                  colorPrimario={colorPrimario}
                  eliminarColaborador={eliminarColaborador}
                  like={like}
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipos;
