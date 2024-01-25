import '@fontsource-variable/rubik'
import { calcularAltura, formatearArreglo } from './helpers'
import { ELEMENTOS } from './data'
import Juego from './components/Juego'
import Menu from './components/Menu'
import { useEffect } from 'react'

const elementosDesordenados = formatearArreglo(ELEMENTOS, 27)

function App () {
    useEffect(() => {
        calcularAltura()
    }, [])
    window.addEventListener('resize', calcularAltura)

    return (
        <>
            <div className="contenedor-menu">
                <h1 className='titulo'>JUEGO DE MEMORAMA</h1>
                <Menu />
            </div>
            <Juego elementosDesordenados={elementosDesordenados}/>
        </>
    )
}

export default App
