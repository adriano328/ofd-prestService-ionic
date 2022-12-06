import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPage } from '../interface/IPage';
import { IPrestador } from '../interface/IPrestador';
import { IProfessional } from '../interface/IProfessional';
import { IRegistroAvaliacao } from '../interface/IRegistroAvaliacao';
import { IRegistroServico } from '../interface/IRegistroServico';
import { IServico } from '../interface/IServico';
import { IServicoRegistre } from '../interface/IServicoRegistre';
import { IUsuario } from '../interface/IUsuario';
import { IUsuarioServicos } from '../interface/IUsuarioServicos';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  async getAll(filtro: string){
    const result = await this.http.get<IPage<IProfessional>>(`${environment.api}/usuario/buscar-por-nome-ou-profissao`, {headers: {Authorization: 'Bearer ' + window.localStorage.getItem('token')}, params: new HttpParams().set('filtro', filtro)}).toPromise();
    return result;
  }

  async getById(id: number): Promise<IRegistroAvaliacao>{
    const result = await this.http.get<IRegistroAvaliacao>(`${environment.api}/avaliacao/buscarAvaliacoesPorIdPrestador/${id}`, {headers: {Authorization: 'Bearer ' + window.localStorage.getItem('token')}, }).toPromise();
    return result;
  }

  async getUsuarioByEmail(email: string){
    const result = await this.http.get<IUsuario>(`${environment.api}/usuario/findUsuarioByEmail`,{headers: {Authorization: 'Bearer ' + window.localStorage.getItem('token')}, params: new HttpParams().set('email', email)}).toPromise();
    return result;
  }

  async saveService(registro: IServicoRegistre){
    return await this.http.post(`${environment.api}/servico/registrar`, registro, {headers: {Authorization: 'Bearer ' + window.localStorage.getItem('token')}}).toPromise();
  }

  async getByIdUser(id: number): Promise<IUsuario>{
    const result = await this.http.get<IUsuario>(`${environment.api}/avaliacao/buscarAvaliacoesPorIdPrestador/${id}`, {headers: {Authorization: 'Bearer ' + window.localStorage.getItem('token')}, }).toPromise();
    return result;
  }

  async getServicesByUser(id: number){
    const result = await this.http.get<IUsuarioServicos>(`${environment.api}/servico/buscarPrestadorEServicos/${id}`, {headers: {Authorization: 'Bearer ' + window.localStorage.getItem('token')}, params: new HttpParams().set('id', id)}).toPromise();
    return result;
  }

  async getServicesByUserCliente(id: number){
    const result = await this.http.get<IUsuarioServicos>(`${environment.api}/servico/buscarClienteEServicos/${id}`, {headers: {Authorization: 'Bearer ' + window.localStorage.getItem('token')}, params: new HttpParams().set('id', id)}).toPromise();
    return result;
  }

  async getClienteByServices(id: number) {
    const result = await this.http.get<IUsuario>(`${environment.api}/usuario/buscarUsuarioClientePorId/${id}`, {headers: {Authorization: 'Bearer ' + window.localStorage.getItem('token')}}).toPromise();
    return result;
  }

  async getPrestadorByServices(id: number) {
    const result = await this.http.get<IUsuario>(`${environment.api}/avaliacao/buscarAvaliacoesPorIdPrestador/${id}`, {headers: {Authorization: 'Bearer ' + window.localStorage.getItem('token')}}).toPromise();
    return result;
  }
}
