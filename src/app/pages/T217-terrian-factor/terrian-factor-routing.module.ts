import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerrianFactorComponent } from './terrian-factor.component';

const routes: Routes = [
  { path: '', component: TerrianFactorComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerrianFactorRoutingModule { }
