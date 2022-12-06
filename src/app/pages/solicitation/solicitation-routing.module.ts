import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenSelfUserPage } from '../screen-self-user/screen-self-user.page';

import { SolicitationPage } from './solicitation.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitationPage
  },
  {
    path: 'home', component: ScreenSelfUserPage
  },
  {
    path: ':id', component: SolicitationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitationPageRoutingModule {}
