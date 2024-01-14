import { BiCaretDown, BiCaretUp } from 'react-icons/bi'
import { NIVELES } from '../data'
import Opcion from './Opcion'

const Select = () => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const select = e.currentTarget
        select.classList.toggle('active')

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
                <p>Normal</p>
                <span className='icono'><BiCaretDown/></span>
            </button>

            <ul className='opciones'>
                {NIVELES.map(nivel => (
                    <Opcion
                        key={nivel.titulo}
                        {...nivel}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Select
