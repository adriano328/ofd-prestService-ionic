import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassPageRoutingModule } from './forgot-pass-routing.module';

import { ForgotPassPage } from './forgot-pass.page';
import { LoginPageRoutingModule } from '../login/login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassPageRoutingModule,  LoginPageRoutingModule, ReactiveFormsModule
  ],
  declarations: [ForgotPassPage]
})
export class ForgotPassPageModule {}
