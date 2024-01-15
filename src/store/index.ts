import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type NivelType, type TiempoType } from '../types'
import { VALORES } from '../data'

interface StorageTipos {
    nivel: NivelType
    tiempo: TiempoType
    setNivel: (nuevoNivel: NivelType) => void
    setTiempo: (nuevoTiempo: TiempoType) => void
}

export const useStorage = create<StorageTipos>()(persist(
    (set) => ({
        nivel: VALORES.facil.nivel,
        tiempo: VALORES.facil.tiempo,
        setNivel: (nuevoNivel: string) => { set(({ nivel: nuevoNivel })) },
        setTiempo: (nuevoTiempo: number) => { set(({ tiempo: nuevoTiempo })) }
    }),
    {
        name: 'memorama-ts'
    }
))
