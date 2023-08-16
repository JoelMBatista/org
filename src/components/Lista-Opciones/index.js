import "./Lista-opciones.css"

const ListaOpciones = (props) => {

   

    const equipotUpdate = (e) => {
        props.actualizarEquipo(e.target.value)

    }

    return <div className="Lista-opciones">
        <label>Equipos</label>
            <select value={props.valor} onChange={equipotUpdate}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo...</option>
                {
                    props.equipo.map((opcion, index)=>{
                        return <option key={index}>{opcion}</option>
                    })
                }
            </select>

    </div>
}

export default ListaOpciones;