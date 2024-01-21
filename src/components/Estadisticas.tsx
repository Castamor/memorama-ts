import { formatearMinutos } from '../helpers'
import { useStorage } from '../store'
import { Cartas, Errores, Tiempo } from './Iconos'

const Estadisticas = () => {
    const cartas = useStorage(state => state.pares * 2)
    return (
        <div className='estadisticas'>
            <p className='cartas'>
                <Cartas className='icono'/>
                <span>{cartas} cartas</span>
            </p>
            <p className='tiempo'>
                <Tiempo className='icono'/>
                <span>{formatearMinutos(80)}</span>
            </p>
            <p className='errores'>
                <Errores className='icono'/>
                <span>00</span>
            </p>
        </div>
    )
}

export default Estadisticas
