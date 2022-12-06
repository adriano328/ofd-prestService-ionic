import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenUserToPrestPage } from './screen-user-to-prest.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenUserToPrestPage
  },
  {
    path:':id', component: ScreenUserToPrestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenUserToPrestPageRoutingModule {}
