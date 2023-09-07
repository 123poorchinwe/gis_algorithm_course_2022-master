import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { HelloTurfRoutingModule } from './hello-turf-routing.module';
import { HelloTurfComponent } from './hello-turf.component';
import { MapComponent } from './map/map.component';
import { GeoJsonComponent } from './geojson/geojson.component';
import { AttributeComponent } from './attribute/attribute.component';

@NgModule({
  declarations: [
    HelloTurfComponent,
    MapComponent,
    GeoJsonComponent,
    AttributeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzTableModule,
    NzIconModule,
    CodemirrorModule,
    HelloTurfRoutingModule
  ],
  bootstrap: [HelloTurfComponent]
})
export class HelloTurfModule { }
