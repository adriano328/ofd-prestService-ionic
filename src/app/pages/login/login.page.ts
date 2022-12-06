import { IToken } from './../../shared/interface/IToken';
import { ILogin } from './../../shared/interface/ILogin';
import { AccountService } from './../../shared/services/account.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { UserServiceService } from 'src/app/shared/services/user-service.service';
import { IUsuario } from '../../shared/interface/IUsuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  UserDates : IUsuario = {} as IUsuario;
  form_signIn: FormGroup;
  accountToLogin: ILogin = {} as ILogin;

  loginIsValid = false;
  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private userService: UserServiceService
  ) {
    this.form_signIn = this.formBuilder.group({
      email: [''],
      senha: ['']
    })
  }

  ngOnInit() {
  }

 async signIn(){

    this.accountToLogin.email = this.form_signIn.value.email;
    this.accountToLogin.senha = this.form_signIn.value.senha;

    const loading = await this.loadingCtrl.create({
      message: 'Entrando...'
    });

    loading.present();

    this.accountService.login(this.accountToLogin).then(success => {
      this.loginIsValid = false;
      loading.dismiss().then(() => {
        this.navCtrl.navigateForward('/professional-window');
        localStorage.setItem = this.form_signIn.value.email;
      });

    }).catch(error => {
      loading.dismiss()
      this.loginIsValid = true;
    })

    this.getUserByEmail()
  }

  async getUserByEmail(){
    const result = await this.userService.getUsuarioByEmail(this.form_signIn.value.email);
    this.UserDates = result
    localStorage.setItem('usuario', JSON.stringify(this.UserDates))  

    console.log(this.UserDates);
    
  }

  ionViewWillEnter(){
    this.verifyLoginToken();
  }

  verifyLoginToken() {
    const token: IToken = {} as IToken;
    token.token = window.localStorage.getItem('token');
    const tokenValid = this.accountService.tokenIsValid(token).then(success => {
      if(tokenValid){
        this.navCtrl.navigateForward('/professional-window');
      }
    }).catch(error => {
    });
  }

}
