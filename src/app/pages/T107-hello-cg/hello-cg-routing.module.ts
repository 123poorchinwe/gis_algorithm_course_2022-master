import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloCGComponent } from './hello-cg.component';

const routes: Routes = [
  { path: '', component: HelloCGComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloCGRoutingModule { }
