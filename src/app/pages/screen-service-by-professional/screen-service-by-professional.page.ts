import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from 'src/app/shared/interface/IUsuario';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-screen-service-by-professional',
  templateUrl: './screen-service-by-professional.page.html',
  styleUrls: ['./screen-service-by-professional.page.scss'],
})
export class ScreenServiceByProfessionalPage implements OnInit {

  idClienteFind!: number;
  professionalSave: IUsuario = {} as IUsuario;

  constructor(
    private userServiceService: UserServiceService,
    private route: ActivatedRoute
    ) {
      this.idClienteFind = parseInt(this.route.snapshot.paramMap.get('id'));
    }

  ngOnInit() {
    this.getProfessionalByServices();
  }

  async getProfessionalByServices() {
    const result = await this.userServiceService.getClienteByServices(this.idClienteFind).then(success => {
    this.professionalSave = success!;
     })
   }

}
