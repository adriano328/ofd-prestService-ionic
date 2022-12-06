import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenServiceByUserPage } from './screen-service-by-user.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenServiceByUserPage
  },
  {
    path:':id', component: ScreenServiceByUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenServiceByUserPageRoutingModule {}
