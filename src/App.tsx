import '@fontsource-variable/rubik'
import { formatearArreglo } from './helpers'
import { VALORES, ELEMENTOS } from './data'
import Juego from './components/Juego'
import Menu from './components/Menu'

const elementosDesordenados = formatearArreglo(ELEMENTOS, 27)

function App () {
    return (
        <>
            <h1 className='titulo'>JUEGO DE MEMORAMA</h1>
            <Menu />
            {/* <Juego elementosDesordenados={elementosDesordenados}/> */}
        </>
    )
}

export default App
