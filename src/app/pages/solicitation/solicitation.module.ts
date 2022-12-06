import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitationPageRoutingModule } from './solicitation-routing.module';

import { SolicitationPage } from './solicitation.page';
import { ScreenSelfUserPageModule } from '../screen-self-user/screen-self-user.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitationPageRoutingModule,
    ScreenSelfUserPageModule
  ],
  declarations: [SolicitationPage]
})
export class SolicitationPageModule {}
