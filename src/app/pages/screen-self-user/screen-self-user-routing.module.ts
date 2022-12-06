import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenSelfUserPage } from './screen-self-user.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenSelfUserPage
  },
  {
    path: 'home', component: ScreenSelfUserPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenSelfUserPageRoutingModule {}
