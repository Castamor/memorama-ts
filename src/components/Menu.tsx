import Contador from './Contador'
import Estadisticas from './Estadisticas'
import { Reiniciar } from './Iconos'
import Boton from './UI/Boton'

const Menu = () => {
    return (
        <>
            <div>
                <Contador />
                <div className='flex'>
                    <Boton className='iniciar'>Iniciar Juego</Boton>
                </div>
            </div>
            <div className='flex'>
                <Estadisticas />
                <Boton className='reiniciar'>
                    <Reiniciar />
                </Boton>
            </div>
        </>
    )
}

export default Menu
