import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenServiceByProfessionalPageRoutingModule } from './screen-service-by-professional-routing.module';

import { ScreenServiceByProfessionalPage } from './screen-service-by-professional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenServiceByProfessionalPageRoutingModule
  ],
  declarations: [ScreenServiceByProfessionalPage]
})
export class ScreenServiceByProfessionalPageModule {}
