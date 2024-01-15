export type NivelType = string
export type TiempoType = number

export interface Nivel {
    nivel: NivelType
    tiempo: TiempoType
}

export interface Dificultades {
    facil: Nivel
    normal: Nivel
    dificil: Nivel
    extremo: Nivel
}
