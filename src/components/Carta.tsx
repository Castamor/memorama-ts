import QuestionMark from './QuestionMark'
import './Carta.css'
import { useEffect, useRef } from 'react'

interface Props {
    nombre: string
    handleClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

const Carta = ({ nombre, handleClick }: Props) => {
    const cartaHTML = useRef<HTMLLIElement>(null)
    useEffect(() => {
        const carta = cartaHTML.current

        if (carta !== null) {
            carta.classList.add('carta-animacion')
            carta.addEventListener('animationend', eliminarAnimacion)
        }

        function eliminarAnimacion () {
            if (carta !== null) {
                carta.classList.remove('carta-animacion')
                carta.removeEventListener('animationend', eliminarAnimacion)
            }
        }
    }, [])

    return (
        <li
            className='carta'
            ref={cartaHTML}
            onClick={(e) => { handleClick(e) }}
        >
            <img
                className="carta-contenido carta-imagen"
                src={`/${nombre}.png`}
                alt='Carta (No se puede revelar el nombre)'
            />
            <QuestionMark />
        </li>
    )
}

export default Carta
