import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationCanvasRoutingModule } from './animation-canvas-routing.module';
import { AnimationCanvasComponent } from './animation-canvas.component';


@NgModule({
  declarations: [
    AnimationCanvasComponent
  ],
  imports: [
    CommonModule,
    AnimationCanvasRoutingModule
  ],
  bootstrap: [AnimationCanvasComponent]
})
export class AnimationCanvasModule { }
