import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsmRoutingModule } from './osm-routing.module';
import { OsmComponent } from './osm.component';


@NgModule({
  declarations: [
    OsmComponent
  ],
  imports: [
    CommonModule,
    OsmRoutingModule
  ],
  bootstrap: [OsmComponent]
})
export class OsmModule { }
