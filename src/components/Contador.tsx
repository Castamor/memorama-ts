import { useStorage } from '../store'
import Boton from './UI/Boton'

const Contador = () => {
    const cartas = useStorage(state => state.cartas)
    const setCartas = useStorage(state => state.setCartas)

    return (
        <header>
            <p className='contador_titulo'>Elige un total de cartas</p>
            <div className='contador_info'>
                <Boton
                    className='numero'
                    onClick={() => { setCartas(-10) }}>
                        -10
                </Boton>
                <Boton
                    className='numero'
                    onClick={() => { setCartas(-2) }}>
                        -2
                </Boton>
                <p className='contador'>{cartas * 2}</p>
                <Boton
                    className='numero'
                    onClick={() => { setCartas(+2) }}>
                        +2
                </Boton>
                <Boton
                    className='numero'
                    onClick={() => { setCartas(+10) }}>
                        +10
                </Boton>
            </div>
            <p className='contador_subtitulo'>( Cantidad de pares: {cartas} )</p>
        </header>
    )
}

export default Contador
