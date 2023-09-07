import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { CorrelationRoutingModule } from './correlation-routing.module';
import { CorrelationComponent } from './correlation.component';


@NgModule({
  declarations: [
    CorrelationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    CorrelationRoutingModule
  ],
  bootstrap: [CorrelationComponent]
})
export class CorrelationModule { }
