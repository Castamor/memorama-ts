import Carta from './components/Carta'
import { elementos, generarId } from './data'

// const elementosDesordenados = [...elementos, ...elementos].sort(() => Math.floor(Math.random() - 0.5))

let elementosDesordenados: string[] = []

for (let i = 0; i < 15; i++) {
    elementosDesordenados = [...elementosDesordenados, elementos[i]]
}

elementosDesordenados = [...elementosDesordenados, ...elementosDesordenados].sort(() => Math.floor(Math.random() - 0.5))

let movimientos = 0
let cartasClickeadas: HTMLElement[] = []
let aciertos = 0

function resetearValores () {
    movimientos = 0
    cartasClickeadas = []
}

function quitarClaseActive () {
    cartasClickeadas.forEach(carta => { carta.classList.remove('active') })
}

function App () {
    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const elemento = e.target as HTMLElement

        if (movimientos < 2) {
            if (!elemento.classList.contains('active') && (!(cartasClickeadas[0] === undefined) || cartasClickeadas[0] !== elemento)) {
                elemento.classList.add('active')
                cartasClickeadas = [...cartasClickeadas, elemento]

                if (++movimientos === 2) {
                    if (cartasClickeadas[0].innerHTML === cartasClickeadas[1].innerHTML) { // SON IGUALES
                        resetearValores()

                        const juegoTerminado = ++aciertos === elementosDesordenados.length / 2
                        if (juegoTerminado) {
                            console.log('YEI')
                        }
                    } else {
                        setTimeout(() => {
                            quitarClaseActive()
                            resetearValores()
                        }, 800)
                    }
                }
            }
        }
    }
    return (
        <>
            <ul className='juego'>
                {elementosDesordenados.map(elemento => (
                    <Carta
                        key={generarId()}
                        nombre={elemento}
                        handleClick={handleClick}
                    />
                ))}
            </ul>
        </>
    )
}

export default App
