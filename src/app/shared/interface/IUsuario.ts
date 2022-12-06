import { PerfilEnum } from "../enum/perfilEnum";
import { IEndereco } from './IEndereco';

export interface IUsuario{
    id: number;
    nome?: string;
    email?: string;
    senha?: string;
    telefone?: string;
    endereco?: IEndereco;
    tipoDeConta?: PerfilEnum;
    imagemPerfil?: string;
    profissao?: string;
}