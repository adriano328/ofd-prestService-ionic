import { Component, OnInit } from '@angular/core';
import { IPage } from 'src/app/shared/interface/IPage';
import { IPrestador } from 'src/app/shared/interface/IPrestador';
import { IRegistroServico } from 'src/app/shared/interface/IRegistroServico';
import { IServico } from 'src/app/shared/interface/IServico';
import { IServicoRegistre } from 'src/app/shared/interface/IServicoRegistre';
import { IUsuario } from 'src/app/shared/interface/IUsuario';
import { IUsuarioServicos } from 'src/app/shared/interface/IUsuarioServicos';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-solicitation',
  templateUrl: './solicitation.page.html',
  styleUrls: ['./solicitation.page.scss'],
})
export class SolicitationPage implements OnInit {

  listServiceByPrestador: IRegistroServico[] = [];
  usuarioStorage: IUsuario = {} as IUsuario 

  constructor(
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.usuarioStorage = JSON.parse(localStorage.getItem('usuario'));
    this.getListServices();
  }

 async getListServices(){
   const result = await this.userService.getServicesByUser(this.usuarioStorage.id);
   result.servicos.content.forEach(servico => {
    servico.horarioDeAtentimento = new Date(servico.horarioDeAtentimento).toLocaleDateString();
    servico.cliente.nome = servico.cliente.nome.split(" ", 2)[0] + " " + servico.cliente.nome.split(" ", 2)[1];
   })
   this.listServiceByPrestador = result.servicos.content; 
   
  }
}
