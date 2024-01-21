import { BiCaretDown, BiCaretUp } from 'react-icons/bi'
import { VALORES } from '../data'
import Opcion from './Opcion'
import { type Nivel } from '../types'
import { useStorage } from '../store'
import { letraMayus } from '../helpers'
import { useState } from 'react'

const Select = () => {
    const [btnActive, setBtnActive] = useState(false)
    const nivel = useStorage(state => state.nivel)

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const select = e.currentTarget
        select.classList.toggle('active')
        setBtnActive(!btnActive)

        const handleClickDocument = (e: MouseEvent) => {
            if (select.classList.contains('active') && !select.contains(e.target as Node)) {
                select.classList.toggle('active')
                document.removeEventListener('click', handleClickDocument)
            }
        }

        document.addEventListener('click', handleClickDocument)
    }

    return (
        <div className='select' onClick={handleClick}>
            <button type='button' className='boton'>
                <p>{letraMayus(nivel)}</p>
                <span className='icono'>{btnActive ? <BiCaretUp/> : <BiCaretDown/>}</span>
            </button>

            <ul className='opciones'>
                {Object.values(VALORES).map((nivel: Nivel) => (
                    <Opcion
                        key={nivel.nivel}
                        {...nivel}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Select
