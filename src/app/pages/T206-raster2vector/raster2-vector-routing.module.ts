import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Raster2VectorComponent } from './raster2-vector.component';

const routes: Routes = [
  { path: '', component: Raster2VectorComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Raster2VectorRoutingModule { }
