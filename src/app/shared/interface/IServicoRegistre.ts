import { IPrestador } from './IPrestador';
import { IUsuario } from './IUsuario';
export interface IServicoRegistre {
    id: number;
    horarioDeAtentimento: string;
    prestador: IPrestador;
    descricaoServico: string;
    cliente: string;
}