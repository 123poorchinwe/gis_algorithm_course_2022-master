import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { HelloGeoJsonRoutingModule } from './hello-geo-json-routing.module';
import { HelloGeoJsonComponent } from './hello-geo-json.component';
import { MapComponent } from './map/map.component';
import { GeoJsonComponent } from './geojson/geojson.component';
import { AttributeComponent } from './attribute/attribute.component';


@NgModule({
  declarations: [
    HelloGeoJsonComponent,
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
    HelloGeoJsonRoutingModule
  ],
  bootstrap: [HelloGeoJsonComponent]
})
export class HelloGeoJsonModule { }
