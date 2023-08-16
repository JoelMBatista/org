import "./Campo.css";

const campo = (props) => {
    const PropsModificado = `${props.placeholder}...`
    const {type = "text"} = props
    const InputUpdate = (e) => {
        props.actualizarValor(e.target.value)
    }



    return <div className={`Campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={PropsModificado} required={props.required} value={props.valor} onChange={InputUpdate} type={type}/>
    </div>
}

export default campo;