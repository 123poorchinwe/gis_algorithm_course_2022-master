import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawCanvasRoutingModule } from './draw-canvas-routing.module';
import { DrawCanvasComponent } from './draw-canvas.component';


@NgModule({
  declarations: [
    DrawCanvasComponent
  ],
  imports: [
    CommonModule,
    DrawCanvasRoutingModule
  ],
  bootstrap: [DrawCanvasComponent]
})
export class DrawCanvasModule { }
