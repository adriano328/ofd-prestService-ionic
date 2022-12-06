export enum PerfilEnum{
    CONTRATANTE = "CONTRATANTE",
    PRESTADOR = "PRESTADOR"
}

export const PerfilLabel: Record<PerfilEnum, string> = {
    [PerfilEnum.CONTRATANTE]: "Cliente",
    [PerfilEnum.PRESTADOR]: "Profissional"
}