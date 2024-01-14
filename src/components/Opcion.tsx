import { letraMayus } from '../helpers'
import { type Nivel } from '../types'

const Opcion = ({ titulo }: Nivel) => {
    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const boton = document.querySelector('.boton')?.querySelector('p')
        if (boton !== undefined && boton !== null) {
            boton.textContent = e.currentTarget.textContent
        }
    }

    return (
        <li onClick={handleClick}><p>{letraMayus(titulo)}</p></li>
    )
}

export default Opcion
