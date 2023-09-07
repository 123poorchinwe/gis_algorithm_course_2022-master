import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KrigingComponent } from './kriging.component';

const routes: Routes = [
  { path: '', component: KrigingComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KrigingRoutingModule { }
