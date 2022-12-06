import { IPage } from "./IPage";
import { IPrestador } from "./IPrestador";
import { IRegistroServico } from "./IRegistroServico";

export interface IUsuarioServicos {
    prestador: IPrestador;
    servicos: IPage<IRegistroServico>;
}