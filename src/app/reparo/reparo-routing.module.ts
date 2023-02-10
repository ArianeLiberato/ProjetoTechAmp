import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReparoPage } from './reparo.page';

const routes: Routes = [
  {
    path: '',
    component: ReparoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReparoPageRoutingModule {}
