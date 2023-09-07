import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { KrigingRoutingModule } from './kriging-routing.module';
import { KrigingComponent } from './kriging.component';


@NgModule({
  declarations: [
    KrigingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    KrigingRoutingModule
  ],
  bootstrap: [KrigingComponent]
})
export class KrigingModule { }
