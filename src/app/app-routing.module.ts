import { AuthGuard } from './shared/guard/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ScreenSelfUserPageModule } from './pages/screen-self-user/screen-self-user.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'forgot-password', 
    loadChildren: () => import('./pages/forgot-pass/forgot-pass.module').then( m => m.ForgotPassPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'professional-window', canActivate: [AuthGuard], // Busca profissional / Home
    loadChildren: () => import('./pages/professional-window/professional-window.module').then( m => m.ProfessionalWindowPageModule)
  },
  {
    path: 'screen-self-user', canActivate: [AuthGuard],// usuário vendo seu perfil
    loadChildren: () => import('./pages/screen-self-user/screen-self-user.module').then( m => m.ScreenSelfUserPageModule)
  },
  {
    path: 'screen-user-to-prest',
    loadChildren: () => import('./pages/screen-user-to-prest/screen-user-to-prest.module').then( m => m.ScreenUserToPrestPageModule)
  },
  {
    path: 'solicitation',
    loadChildren: () => import('./pages/solicitation/solicitation.module').then( m => m.SolicitationPageModule)
  },  {
    path: 'screen-service-by-user',
    loadChildren: () => import('./pages/screen-service-by-user/screen-service-by-user.module').then( m => m.ScreenServiceByUserPageModule)
  },
  {
    path: 'screen-service-by-professional',
    loadChildren: () => import('./pages/screen-service-by-professional/screen-service-by-professional.module').then( m => m.ScreenServiceByProfessionalPageModule)
  },

 















];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
