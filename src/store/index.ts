import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ELEMENTOS } from '../data'

interface StorageTipos {
    cartas: number
    setCartas: (valor: number) => void
}

export const useStorage = create<StorageTipos>()(persist(
    (set, get) => ({
        cartas: 4,
        setCartas (valor) {
            let nuevaCantidad: number
            const cantidadActual = get().cartas

            if (cantidadActual + valor > ELEMENTOS.length) {
                nuevaCantidad = ELEMENTOS.length
            } else if (cantidadActual + valor <= 2) {
                nuevaCantidad = 2
            } else {
                nuevaCantidad = cantidadActual + valor
            }

            set({ cartas: nuevaCantidad })
        }
    }),
    {
        name: 'memorama-ts'
    }
))
