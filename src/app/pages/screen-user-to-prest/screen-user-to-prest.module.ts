import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenUserToPrestPageRoutingModule } from './screen-user-to-prest-routing.module';

import { ScreenUserToPrestPage } from './screen-user-to-prest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenUserToPrestPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ScreenUserToPrestPage]
})
export class ScreenUserToPrestPageModule {}
