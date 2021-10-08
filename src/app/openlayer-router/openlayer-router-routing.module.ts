import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OpanlayerRouterComponent} from './pages/openlayer-router.component'


const routes: Routes = [
  {path: '', component: OpanlayerRouterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenlayerRouterRoutingModule { }
