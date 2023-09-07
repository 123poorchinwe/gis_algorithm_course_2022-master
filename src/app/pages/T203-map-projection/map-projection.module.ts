import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { MapProjectionRoutingModule } from './map-projection-routing.module';
import { MapProjectionComponent } from './map-projection.component';
import { AttributeComponent } from './attribute/attribute.component';
import { GeoJsonComponent } from './geojson/geojson.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    MapProjectionComponent,
    AttributeComponent,
    GeoJsonComponent,
    MapComponent
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
    MapProjectionRoutingModule
  ],
  bootstrap: [MapProjectionComponent]
})
export class MapProjectionModule { }
