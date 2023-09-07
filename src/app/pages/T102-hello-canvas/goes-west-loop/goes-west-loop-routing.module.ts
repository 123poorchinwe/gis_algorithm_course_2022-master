import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoesWestLoopComponent } from './goes-west-loop.component';

const routes: Routes = [
  { path: '', component: GoesWestLoopComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoesWestLoopRoutingModule { }
