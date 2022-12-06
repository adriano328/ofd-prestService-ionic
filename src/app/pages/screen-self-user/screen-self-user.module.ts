import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenSelfUserPageRoutingModule } from './screen-self-user-routing.module';

import { ScreenSelfUserPage } from './screen-self-user.page';
import { SolicitationPageModule } from '../solicitation/solicitation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenSelfUserPageRoutingModule,

  ],
  declarations: [ScreenSelfUserPage]
})
export class ScreenSelfUserPageModule {}
