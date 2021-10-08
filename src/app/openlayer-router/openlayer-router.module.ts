import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpanlayerRouterComponent } from './pages/openlayer-router.component';
import {NzButtonModule} from 'ng-zorro-antd/button'

import {OpenlayerRouterRoutingModule}  from './openlayer-router-routing.module'



@NgModule({
  declarations: [OpanlayerRouterComponent],
  imports: [
    OpenlayerRouterRoutingModule,
    CommonModule,
    NzButtonModule
  ]
})
export class OpenlayerRouterModule { }
