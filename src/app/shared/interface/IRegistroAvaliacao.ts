import { IPrestador } from './IPrestador';
import { IAvaliacao } from './IAvaliacao';
import { IPage } from './IPage';

export interface IRegistroAvaliacao {
    prestador: IPrestador;
    avaliacoes?: IPage<IAvaliacao>;
}