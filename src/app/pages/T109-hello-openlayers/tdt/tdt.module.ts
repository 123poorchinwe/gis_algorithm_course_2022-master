import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdtRoutingModule } from './tdt-routing.module';
import { TdtComponent } from './tdt.component';


@NgModule({
  declarations: [
    TdtComponent
  ],
  imports: [
    CommonModule,
    TdtRoutingModule
  ],
  bootstrap: [TdtComponent]
})
export class TdtModule { }
