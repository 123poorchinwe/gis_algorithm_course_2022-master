import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationCanvasComponent } from './animation-canvas.component';

const routes: Routes = [
  { path: '', component: AnimationCanvasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationCanvasRoutingModule { }
