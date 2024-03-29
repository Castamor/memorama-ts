export const generarId = () => Math.random().toString(36).substring(2) + Date.now().toString(36)
export const letraMayus = (texto: string) => texto.charAt(0).toUpperCase() + texto.slice(1)

export function formatearArreglo (arreglo: string[], size: number): string[] {
    let arregloDesordenado: string[] = []
    const setIndexes = new Set<number>()

    // Asegurarme que el numero propuesto no sea mayor al propio arreglo de ELEMENTOS
    size = (size > arreglo.length) ? arreglo.length : size

    for (let i = 0; i < size; i++) {
        let randomIndex = Math.floor(Math.random() * arreglo.length) // generar un index aleatorio

        while (setIndexes.has(randomIndex)) { // mientras el Set tenga este index, seguir generando uno hasta que no se repita
            randomIndex = Math.floor(Math.random() * arreglo.length)
        }

        setIndexes.add(randomIndex) // agregar este index sin repetir al Set para que en siguiente bucle se tome en cuenta

        arregloDesordenado = [...arregloDesordenado, arreglo[randomIndex]] // utilizar dicho index
    }

    arregloDesordenado = [...arregloDesordenado, ...arregloDesordenado].sort(() => Math.floor(Math.random() - 0.5))
    return arregloDesordenado
}

export const formatearMinutos = (segundos: number): string => {
    const minuto = Math.floor(segundos / 60)
    const segundosRestantes = segundos % 60

    const minutoFormateado = minuto < 10 ? `0${minuto}` : `${minuto}`
    const segundosFormateados = segundosRestantes < 10 ? `0${segundosRestantes}` : `${segundosRestantes}`

    return `${minutoFormateado}:${segundosFormateados}`
}

export const calcularAltura = () => {
    const alturaPantalla = window.innerHeight
    const alturaContenido = document.querySelector('#root')?.clientHeight

    console.log('ALTURA PANTALLA:\n', alturaPantalla)
    console.log('ALTURA CONTENIDO:\n', alturaContenido)

    if (alturaContenido === undefined) return

    alturaPantalla >= alturaContenido
        ? document.body.classList.add('altura')
        : document.body.classList.remove('altura')
}
