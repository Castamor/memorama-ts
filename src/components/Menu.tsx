import Contador from './Contador'
import Estadisticas from './Estadisticas'
import Boton from './UI/Boton'

const Menu = () => {
    return (
        <>
            <section className="menu">
                <Contador />
                {/* <Estadisticas /> */}
            </section>
            <div className='botones-accion'>
                <Boton className='iniciar'>Iniciar Juego</Boton>
            </div>
        </>
    )
}

export default Menu
