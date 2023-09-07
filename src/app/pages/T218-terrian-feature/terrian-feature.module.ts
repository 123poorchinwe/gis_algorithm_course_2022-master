import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { TerrianFeatureRoutingModule } from './terrian-feature-routing.module';
import { TerrianFeatureComponent } from './terrian-feature.component';


@NgModule({
  declarations: [
    TerrianFeatureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    TerrianFeatureRoutingModule
  ],
  bootstrap: [TerrianFeatureComponent]
})
export class TerrianFeatureModule { }
