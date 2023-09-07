import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloFileComponent } from './hello-file.component';

const routes: Routes = [
  { path: '', component: HelloFileComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloFileRoutingModule { }
