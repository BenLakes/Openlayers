import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpanlayerDemoComponent } from './pages/openlayer-demo.component';

import {OpenlayerDemoRoutingModule}  from './openlayer-demo-routing.module'




@NgModule({
  declarations: [OpanlayerDemoComponent],
  imports: [
    OpenlayerDemoRoutingModule,
    CommonModule,
  ]
})
export class OpenlayerDemoModule { }
