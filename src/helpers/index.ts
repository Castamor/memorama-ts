export const generarId = () => Math.random().toString(36).substring(2) + Date.now().toString(36)
export const letraMayus = (texto: string) => texto.charAt(0).toUpperCase() + texto.slice(1)

export function formatearArreglo (arreglo: string[], size: number): string[] {
    let arregloDesordenado: string[] = []
    const setIndexes = new Set<number>()

    // Asegurarme que el numero propuesto no sea mayor al propio arreglo de elementos
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
