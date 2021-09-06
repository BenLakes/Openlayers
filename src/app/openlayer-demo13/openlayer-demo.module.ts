import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpanlayerDemoComponent } from './pages/openlayer-demo.component';

import {OpenlayerDemoRoutingModule}  from './openlayer-demo-routing.module'
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [OpanlayerDemoComponent],
  imports: [
    OpenlayerDemoRoutingModule,
    CommonModule,
    NzModalModule,
    NzSliderModule,
    FormsModule
  ]
})
export class OpenlayerDemoModule { }
