import '@fontsource-variable/rubik'
import { formatearArreglo } from './helpers'
import { elementos } from './data'
import Juego from './components/Juego'
import Header from './components/Header'

const elementosDesordenados = formatearArreglo(elementos, 27)

function App () {
    return (
        <>
            <Header />
            {/* <Juego elementosDesordenados={elementosDesordenados}/> */}
        </>
    )
}

export default App
