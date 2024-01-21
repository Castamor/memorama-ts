interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Boton = ({ children, className, ...props }: Props) => {
    return (
        <button
            type="button"
            className={`boton ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Boton
