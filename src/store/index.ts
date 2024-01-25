import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ELEMENTOS } from '../data'

interface StorageTipos {
    pares: number
    setPares: (valor: number) => void
    cabeContenido: boolean
    setCabeContenido: (valor: boolean) => void
}

export const useStorage = create<StorageTipos>()(persist(
    (set, get) => ({
        pares: 4,
        setPares (valor) {
            let nuevaCantidad: number
            const cantidadActual = get().pares

            if (cantidadActual + valor > ELEMENTOS.length) {
                nuevaCantidad = ELEMENTOS.length
            } else if (cantidadActual + valor <= 2) {
                nuevaCantidad = 2
            } else {
                nuevaCantidad = cantidadActual + valor
            }

            set({ pares: nuevaCantidad })
        },
        cabeContenido: true,
        setCabeContenido (valor) {
            set({ cabeContenido: valor })
        }
    }),
    {
        name: 'memorama-ts'
    }
))
