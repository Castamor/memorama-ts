import { formatearMinutos } from '../helpers'
import { useStorage } from '../store'
import { Errores, Tiempo } from './Iconos'
import Select from './Select'
import Contador from './Contador'

const Menu = () => {
    const tiempo = useStorage(state => state.tiempo)
    return (
        <section className="menu">
            <Contador />
            {/* <Select />

            <div className='estadisticas'>
                <p className='tiempo'>
                    <Tiempo className='icono'/>
                    <span>{formatearMinutos(tiempo)}</span>
                </p>
                <p className='errores'>
                    <Errores className='icono'/>
                    <span>00</span>
                </p>
            </div> */}
        </section>
    )
}

export default Menu

// <div className="botones">
// {/* <button
//         type='button'
//         className='boton-reiniciar'
//     >Ver tablero</button> */}
// <button
//     type='button'
//     className='boton-empezar'
// >Empezar</button>
// </div>
