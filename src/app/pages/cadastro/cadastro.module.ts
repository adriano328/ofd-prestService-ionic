import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';
import { Camera } from '@ionic-native/camera/ngx/index';

@NgModule({
  imports: [
    CommonModule,
   
    IonicModule,
    CadastroPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CadastroPage],
 
})
export class CadastroPageModule {}
