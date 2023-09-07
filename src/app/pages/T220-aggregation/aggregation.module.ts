import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { AggregationRoutingModule } from './aggregation-routing.module';
import { AggregationComponent } from './aggregation.component';


@NgModule({
  declarations: [
    AggregationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    AggregationRoutingModule
  ],
  bootstrap: [AggregationComponent]
})
export class AggregationModule { }
