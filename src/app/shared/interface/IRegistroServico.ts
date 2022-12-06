import { IUsuario } from "./IUsuario";

export interface IRegistroServico {
    id: number;
    horarioDeAtentimento: string;
    prestador: IUsuario;
    cliente: IUsuario;
    descricaoServico: string
}