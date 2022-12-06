import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenServiceByUserPageRoutingModule } from './screen-service-by-user-routing.module';

import { ScreenServiceByUserPage } from './screen-service-by-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenServiceByUserPageRoutingModule
  ],
  declarations: [ScreenServiceByUserPage]
})
export class ScreenServiceByUserPageModule {}
