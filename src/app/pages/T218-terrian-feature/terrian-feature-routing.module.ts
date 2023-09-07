import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerrianFeatureComponent } from './terrian-feature.component';

const routes: Routes = [
  { path: '', component: TerrianFeatureComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerrianFeatureRoutingModule { }
