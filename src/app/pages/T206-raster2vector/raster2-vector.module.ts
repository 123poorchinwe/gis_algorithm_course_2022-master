import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { Raster2VectorRoutingModule } from './raster2-vector-routing.module';
import { Raster2VectorComponent } from './raster2-vector.component';


@NgModule({
  declarations: [
    Raster2VectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    Raster2VectorRoutingModule
  ],
  bootstrap: [Raster2VectorComponent]
})
export class Raster2VectorModule { }
