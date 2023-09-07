import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanvasLayerComponent } from './canvas-layer.component';


@NgModule({
  declarations: [
    CanvasLayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CanvasLayerComponent
  ]
})
export class CanvasLayerModule { }
