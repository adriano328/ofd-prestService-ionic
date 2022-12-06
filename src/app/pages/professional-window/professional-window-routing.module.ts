import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenUserToPrestPage } from '../screen-user-to-prest/screen-user-to-prest.page';

import { ProfessionalWindowPage } from './professional-window.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalWindowPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalWindowPageRoutingModule {}
