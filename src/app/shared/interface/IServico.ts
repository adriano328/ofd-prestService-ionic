import { IPrestador } from './IPrestador';
import { IUsuario } from './IUsuario';
export interface IServico {
    id: number;
    horarioDeAtentimento: string;
    prestador: IPrestador;
    descricaoServico: string;
    cliente: IUsuario;
}