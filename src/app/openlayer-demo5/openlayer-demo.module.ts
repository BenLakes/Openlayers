import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpanlayerDemoComponent } from './pages/openlayer-demo.component';

import {OpenlayerDemoRoutingModule}  from './openlayer-demo-routing.module'
import { NzModalModule } from 'ng-zorro-antd/modal';



@NgModule({
  declarations: [OpanlayerDemoComponent],
  imports: [
    OpenlayerDemoRoutingModule,
    CommonModule,
    NzModalModule
  ]
})
export class OpenlayerDemoModule { }
