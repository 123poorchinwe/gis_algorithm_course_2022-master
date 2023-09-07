import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IDWComponent } from './idw.component';

const routes: Routes = [
  { path: '', component: IDWComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IDWRoutingModule { }
