import { IForgotMyPassword } from './../interface/IForgotMyPassword';
import { ILogin } from './../interface/ILogin';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { IToken } from "../interface/IToken";
import { IUsuario } from '../interface/IUsuario';

@Injectable({
    providedIn: 'root'
  })
  export class AccountService {

    constructor(private http: HttpClient) {}

    async login(user: ILogin): Promise<boolean> {
      const result = await this.http.post<any>(`${environment.api}/autenticacao/autenticar`, user).toPromise();

      if (result && result.token) {
        window.localStorage.setItem('token', result.token);
        return true;
      }

      return false;
    }

    getAuthorizationToken(): string {
      const token = window.localStorage.getItem('token');

      return token!;
    }

    async tokenIsValid(token: IToken) {

      return await this.http.post<any>(`${environment.api}/autenticacao/validar`, token).toPromise();
    }

    async logoff(): Promise<void> {
      window.localStorage.removeItem('token');
    }

    async forgotMyPassword(body: IForgotMyPassword){
      return await this.http.post<any>(`${environment.api}/resetPassword/forgot-password`, body).toPromise();
    }

    async save(usuario: IUsuario){
      return await this.http.post<IUsuario>(`${environment.api}/usuario/salvar`, usuario).toPromise();
    }

   
    
  }