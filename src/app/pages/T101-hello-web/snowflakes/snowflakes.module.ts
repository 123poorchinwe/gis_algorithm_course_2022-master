import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnowflakesRoutingModule } from './snowflakes-routing.module';
import { SnowflakesComponent } from './snowflakes.component';


@NgModule({
  declarations: [
    SnowflakesComponent
  ],
  imports: [
    CommonModule,
    SnowflakesRoutingModule
  ],
  bootstrap: [SnowflakesComponent]
})
export class SnowflakesModule { }
