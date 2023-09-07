import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParabolicMotionComponent } from './parabolic-motion.component';

const routes: Routes = [
  { path: '', component: ParabolicMotionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParabolicMotionRoutingModule { }
