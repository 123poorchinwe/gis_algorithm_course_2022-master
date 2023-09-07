import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelaunayVoronoiComponent } from './delaunay-voronoi.component';

const routes: Routes = [
  { path: '', component: DelaunayVoronoiComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelaunayVoronoiRoutingModule { }
