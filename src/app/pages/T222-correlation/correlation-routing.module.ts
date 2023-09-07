import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrelationComponent } from './correlation.component';

const routes: Routes = [
  { path: '', component: CorrelationComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorrelationRoutingModule { }
