import { Component, OnInit } from '@angular/core';
import { IPrestador } from 'src/app/shared/interface/IPrestador';
import { IRegistroServico } from 'src/app/shared/interface/IRegistroServico';
import { IUsuario } from 'src/app/shared/interface/IUsuario';
import { AccountService } from 'src/app/shared/services/account.service';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-screen-self-user',
  templateUrl: './screen-self-user.page.html',
  styleUrls: ['./screen-self-user.page.scss'],
})
export class ScreenSelfUserPage implements OnInit {

  usuarioStorage: IUsuario = {} as IUsuario
  canShow: boolean = false;
  genderClose: boolean = true;
  listServiceByPrestador: IRegistroServico[] = [];

  constructor(
    private userServiceService: UserServiceService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.usuarioStorage = JSON.parse(localStorage.getItem('usuario'))
    this.openGestor();
    this.getListServices();
    this.openCalendar();
  }

  logout() {
    this.accountService.logoff();
    location.reload()
  }

  openCalendar() {
    if (this.usuarioStorage.tipoDeConta == "PRESTADOR") {
      this.genderClose = false
    }
  }

  openGestor() {
    if (this.usuarioStorage.tipoDeConta == "PRESTADOR") {
      this.canShow = true
    }
  }

  async getListServices() {
    const result = await this.userServiceService.getServicesByUserCliente(this.usuarioStorage.id);
    result.servicos.content.forEach(servico => {
      servico.horarioDeAtentimento = new Date(servico.horarioDeAtentimento).toLocaleDateString();
      servico.prestador.nome = servico.prestador.nome.split(" ", 2)[0] + " " + servico.prestador.nome.split(" ", 2)[1];
    })
    this.listServiceByPrestador = result.servicos.content
  }
}
