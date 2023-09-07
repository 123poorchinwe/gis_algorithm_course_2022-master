import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnowflakesComponent } from './snowflakes.component';

const routes: Routes = [
  { path: '', component: SnowflakesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnowflakesRoutingModule { }
