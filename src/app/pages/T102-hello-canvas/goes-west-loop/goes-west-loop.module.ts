import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { GoesWestLoopComponent } from './goes-west-loop.component';
import { GoesWestLoopRoutingModule } from './goes-west-loop-routing.module';

@NgModule({
  declarations: [
    GoesWestLoopComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    GoesWestLoopRoutingModule
  ],
  bootstrap: [GoesWestLoopComponent]
})
export class GoesWestLoopModule { }
