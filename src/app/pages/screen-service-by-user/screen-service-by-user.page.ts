import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRegistroServico } from 'src/app/shared/interface/IRegistroServico';
import { IUsuario } from 'src/app/shared/interface/IUsuario';
import { AccountService } from 'src/app/shared/services/account.service';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-screen-service-by-user',
  templateUrl: './screen-service-by-user.page.html',
  styleUrls: ['./screen-service-by-user.page.scss'],
})
export class ScreenServiceByUserPage implements OnInit {

  idClienteFind!: number;
  clienteUser: IUsuario = {} as IUsuario;

  constructor(
    private userServiceService: UserServiceService,
    private route: ActivatedRoute
  ) {
    this.idClienteFind = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.getClienteByServices();
  }

  async getClienteByServices() {
   const result = await this.userServiceService.getClienteByServices(this.idClienteFind).then(success => {
    this.clienteUser = success!;
    console.log(this.clienteUser);
    })
  }
}
