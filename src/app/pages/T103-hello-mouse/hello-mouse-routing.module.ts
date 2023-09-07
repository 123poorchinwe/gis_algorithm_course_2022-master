import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloMouseComponent } from './hello-mouse.component';

const routes: Routes = [
  { path: '', component: HelloMouseComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloMouseRoutingModule { }
