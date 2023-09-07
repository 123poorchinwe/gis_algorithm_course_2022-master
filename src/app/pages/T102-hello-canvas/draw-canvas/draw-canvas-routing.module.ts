import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawCanvasComponent } from './draw-canvas.component';

const routes: Routes = [
  { path: '', component: DrawCanvasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawCanvasRoutingModule { }
