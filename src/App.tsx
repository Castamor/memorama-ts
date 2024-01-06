import Carta from './components/Carta'
import { elementos, generarId } from './data'

const elementosDesordenados = [...elementos, ...elementos].sort(() => Math.floor(Math.random() - 0.5))

function App () {
    return (
        <>
            <ul className='juego'>
                {elementosDesordenados.map(elemento => (
                    <Carta
                        key={generarId()}
                        nombre={elemento}
                    />
                ))}
            </ul>
        </>
    )
}

export default App
