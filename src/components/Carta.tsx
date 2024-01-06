import QuestionMark from './QuestionMark'

const Carta = () => {
    return (
        <li className='carta'>
            <img
                className="carta-contenido carta-imagen"
                src="/pan.png"
                alt="agua"
                title="agua"
            />
            <QuestionMark />
        </li>
    )
}

export default Carta
