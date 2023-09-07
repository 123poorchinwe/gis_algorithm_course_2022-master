import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RTreeComponent } from './rtree.component';

const routes: Routes = [
  { path: '', component: RTreeComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RTreeRoutingModule { }
