import "./colaborador.css"
import {AiOutlineCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai"

const Colaborador = (props) => {

    const{ name, puesto, foto, id, fav} = props.datos
    const{ colorPrimario, eliminarColaborador, like} = props
//conduciones ternarias se aplican de la siguiente manera
//conficion ? verdadero : falso
    return <div className="colaborador">
        <AiOutlineCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar"/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={name}/>
        </div>

        <div className="info">
            <h4>{name}</h4>
            <h5>{puesto}</h5>
            {/*condicional si el colaborador esta en favoritos*/
                fav ? <AiFillHeart color="red" onClick={()=> like(id)}/> :    <AiOutlineHeart onClick={()=> like(id)}/>
            }
     
        </div>
    

    </div>
}

export default Colaborador