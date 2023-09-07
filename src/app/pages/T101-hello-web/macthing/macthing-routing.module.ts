import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MacthingComponent } from './macthing.component';

const routes: Routes = [
  { path: '', component: MacthingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MacthingRoutingModule { }
