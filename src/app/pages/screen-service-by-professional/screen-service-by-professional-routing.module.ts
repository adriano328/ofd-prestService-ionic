import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenServiceByProfessionalPage } from './screen-service-by-professional.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenServiceByProfessionalPage
  },
  {
    path:':id', component: ScreenServiceByProfessionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenServiceByProfessionalPageRoutingModule {}
