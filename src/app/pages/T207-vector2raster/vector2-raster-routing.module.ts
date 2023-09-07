import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vector2RasterComponent } from './vector2-raster.component';

const routes: Routes = [
  { path: '', component: Vector2RasterComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vector2RasterRoutingModule { }
