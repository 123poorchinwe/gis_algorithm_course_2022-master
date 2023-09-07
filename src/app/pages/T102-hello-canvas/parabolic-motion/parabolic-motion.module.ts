import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParabolicMotionRoutingModule } from './parabolic-motion-routing.module';
import { ParabolicMotionComponent } from './parabolic-motion.component';


@NgModule({
  declarations: [
    ParabolicMotionComponent
  ],
  imports: [
    CommonModule,
    ParabolicMotionRoutingModule
  ],
  bootstrap: [ParabolicMotionComponent]
})
export class ParabolicMotionModule { }
