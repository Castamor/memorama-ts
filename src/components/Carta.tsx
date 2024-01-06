import QuestionMark from './QuestionMark'
import './Carta.css'

interface Props {
    nombre: string
    handleClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

const Carta = ({ nombre, handleClick }: Props) => {
    return (
        <li
            className='carta'
            onClick={(e) => { handleClick(e) }}
        >
            <img
                className="carta-contenido carta-imagen"
                src={`/${nombre}.png`}
                alt='Carta (No se puede revelar el nombre)'
                loading='lazy'
            />
            <QuestionMark />
        </li>
    )
}

export default Carta
