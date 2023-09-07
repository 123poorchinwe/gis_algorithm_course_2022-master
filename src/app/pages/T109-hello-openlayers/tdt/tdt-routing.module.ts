import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdtComponent } from './tdt.component';

const routes: Routes = [
  { path: '', component: TdtComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TdtRoutingModule { }
