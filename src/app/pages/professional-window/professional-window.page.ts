import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route} from '@angular/router';
import { IProfessional } from 'src/app/shared/interface/IProfessional';
import { IRegistroAvaliacao } from 'src/app/shared/interface/IRegistroAvaliacao';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-professional-window',
  templateUrl: './professional-window.page.html',
  styleUrls: ['./professional-window.page.scss'],
})
export class ProfessionalWindowPage implements OnInit {

  form: FormGroup

  listProfissionais: IProfessional[] = [];

  idProfessionalFind: number;

  link_imagem: '';

  constructor(
    private router: ActivatedRoute,
    private userService: UserServiceService,
    private formBuilder: FormBuilder,

  ) {
    this.form = this.formBuilder.group({
      filtro: ['']
    })
  }

  ngOnInit() {
    this.getAllProfessionais();
  }

 async getAllProfessionais(){
    const result = await this.userService.getAll(this.form.value.filtro)
    result.content?.forEach(p => {
      p.nome_imagem = `https://img-profile.s3.sa-east-1.amazonaws.com/${p.nome_imagem}`;
      p.nome = p.nome.split(" ", 2)[0] + " " + p.nome.split(" ", 2)[1]

      
    });
    this.listProfissionais = result.content;
  }
}
