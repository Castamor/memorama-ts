import { useStorage } from '../store'
import Boton from './UI/Boton'

const Contador = () => {
    const pares = useStorage(state => state.pares)
    const setPares = useStorage(state => state.setPares)

    return (
        <header className='contador fondo-blanco'>
            <p className='contador_titulo'>Elige un total de cartas</p>
            <div className='contador_info'>
                <Boton
                    className='numero'
                    onClick={() => { setPares(-5) }}>
                        -10
                </Boton>
                <Boton
                    className='numero'
                    onClick={() => { setPares(-1) }}>
                        -2
                </Boton>
                <p className='contador_info-cartas'>{pares * 2}</p>
                <Boton
                    className='numero'
                    onClick={() => { setPares(+1) }}>
                        +2
                </Boton>
                <Boton
                    className='numero'
                    onClick={() => { setPares(+5) }}>
                        +10
                </Boton>
            </div>
            <p className='contador_subtitulo'>( Cantidad de pares: {pares} )</p>
        </header>
    )
}

export default Contador
