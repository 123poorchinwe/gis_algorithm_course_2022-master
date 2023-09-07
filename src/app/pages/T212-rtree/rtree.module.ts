import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { RTreeRoutingModule } from './rtree-routing.module';
import { RTreeComponent } from './rtree.component';


@NgModule({
  declarations: [
    RTreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    RTreeRoutingModule
  ],
  bootstrap: [RTreeComponent]
})
export class RTreeModule { }
