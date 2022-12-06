import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessionalWindowPageRoutingModule } from './professional-window-routing.module';

import { ProfessionalWindowPage } from './professional-window.page';
import { ScreenUserToPrestPageModule } from '../screen-user-to-prest/screen-user-to-prest.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessionalWindowPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfessionalWindowPage]
})
export class ProfessionalWindowPageModule {}
