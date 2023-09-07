import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { Vector2RasterRoutingModule } from './vector2-raster-routing.module';
import { Vector2RasterComponent } from './vector2-raster.component';


@NgModule({
  declarations: [
    Vector2RasterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    Vector2RasterRoutingModule
  ],
  bootstrap: [Vector2RasterComponent]
})
export class Vector2RasterModule { }
