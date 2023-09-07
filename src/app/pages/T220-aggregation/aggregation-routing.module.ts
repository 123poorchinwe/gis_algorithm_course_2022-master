import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggregationComponent } from './aggregation.component';

const routes: Routes = [
  { path: '', component: AggregationComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AggregationRoutingModule { }
