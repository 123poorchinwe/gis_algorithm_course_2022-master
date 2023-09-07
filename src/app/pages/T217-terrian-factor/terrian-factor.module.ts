import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { TerrianFactorRoutingModule } from './terrian-factor-routing.module';
import { TerrianFactorComponent } from './terrian-factor.component';


@NgModule({
  declarations: [
    TerrianFactorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    TerrianFactorRoutingModule
  ],
  bootstrap: [TerrianFactorComponent]
})
export class TerrianFactorModule { }
