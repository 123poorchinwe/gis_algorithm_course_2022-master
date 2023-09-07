import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { SmoothRoutingModule } from './smooth-routing.module';
import { SmoothComponent } from './smooth.component';


@NgModule({
  declarations: [
    SmoothComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    SmoothRoutingModule
  ],
  bootstrap: [SmoothComponent]
})
export class SmoothModule { }
