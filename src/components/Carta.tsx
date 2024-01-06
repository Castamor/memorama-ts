import QuestionMark from './QuestionMark'
import './Carta.css'

interface Props {
    nombre: string
}

const Carta = ({ nombre }: Props) => {
    return (
        <li className='carta active'>
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
