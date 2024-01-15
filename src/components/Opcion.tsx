import { letraMayus, removerClaseActive } from '../helpers'
import { useStorage } from '../store'
import { type Nivel } from '../types'

const Opcion = ({ nivel, tiempo }: Nivel) => {
    const setNivel = useStorage(state => state.setNivel)
    const setTiempo = useStorage(state => state.setTiempo)

    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const opciones = document.querySelectorAll('.opciones li')
        removerClaseActive(e, opciones)

        e.currentTarget.classList.add('active')
        setNivel(nivel)
        setTiempo(tiempo)
    }

    return (
        <li onClick={handleClick}><p>{letraMayus(nivel)}</p></li>
    )
}

export default Opcion
