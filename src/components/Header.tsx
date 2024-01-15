import { formatearMinutos } from '../helpers'
import { useStorage } from '../store'
import { Errores, Tiempo } from './Iconos'
import Select from './Select'

const Header = () => {
    const tiempo = useStorage(state => state.tiempo)
    return (
        <>
            <header>
                <h1 className='titulo'>JUEGO DE MEMORAMA</h1>
            </header>
            <section className="menu">
                <Select />

                <div className='estadisticas'>
                    <p className='tiempo'>
                        <Tiempo className='icono'/>
                        <span>{formatearMinutos(tiempo)}</span>
                    </p>
                    <p className='errores'>
                        <Errores className='icono'/>
                        <span>00</span>
                    </p>
                </div>
            </section>
            <div className="botones">
                {/* <button
                        type='button'
                        className='boton-reiniciar'
                    >Ver tablero</button> */}
                <button
                    type='button'
                    className='boton-empezar'
                >Empezar</button>
            </div>
        </>
    )
}

export default Header
