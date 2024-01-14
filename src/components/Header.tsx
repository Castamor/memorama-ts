import { Errores, Tiempo } from './Iconos'
import Select from './Select'

const Header = () => {
    return (
        <>
            <header>
                <h1 className='titulo'>JUEGO DE MEMORAMA</h1>
            </header>
            <section className="menu">
                <Select />

                <div className='estadisticas'>
                    <p className='tiempo'>
                        <span className='icono'><Tiempo/> </span>
                        00:59
                    </p>
                    <p className='errores'>
                        <span className='icono'><Errores/> </span>
                        02
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
