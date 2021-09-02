import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OpanlayerDemoComponent} from './pages/openlayer-demo.component'


const routes: Routes = [
  {path: '', component: OpanlayerDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenlayerDemoRoutingModule { }
