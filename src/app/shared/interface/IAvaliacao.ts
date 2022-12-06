import { IServico } from './IServico';
import { IPrestador } from './IPrestador';
export interface IAvaliacao {
    id: number;
    dataAvaliacao: string;
    notaAvaliacao: number;
    servico: IServico;
    descricao: string;
}