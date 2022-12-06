import { IResponse } from './../../shared/interface/IResponse';
import { IForgotMyPassword } from './../../shared/interface/IForgotMyPassword';
import { AccountService } from './../../shared/services/account.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {

  formForgotPassword:FormGroup;
  bodyForgotMyPassword: IForgotMyPassword = {} as IForgotMyPassword;
  messageResponse: string;
  showLoadingRequest = false;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {
    this.formForgotPassword = formBuilder.group({
      email:['']
    })
  }

  ngOnInit() {
  }

  forgotMyPassWord(){
    this.messageResponse = "";
    this.showLoadingRequest = true;
    this.bodyForgotMyPassword.email = this.formForgotPassword.value.email;
    this.accountService.forgotMyPassword(this.bodyForgotMyPassword).then(success => {
      this.showLoadingRequest = false;
      this.messageResponse = success.message;
    }).catch(error => {
      this.showLoadingRequest = false;
      this.messageResponse = error.error.erro
    })
  }

}
