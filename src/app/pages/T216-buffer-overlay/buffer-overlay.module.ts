import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { BufferOverlayRoutingModule } from './buffer-overlay-routing.module';
import { BufferOverlayComponent } from './buffer-overlay.component';
import { MapComponent } from './map/map.component';
import { GeoJsonComponent } from './geojson/geojson.component';
import { AttributeComponent } from './attribute/attribute.component';


@NgModule({
  declarations: [
    BufferOverlayComponent,
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
    BufferOverlayRoutingModule
  ],
  bootstrap: [BufferOverlayComponent]
})
export class BufferOverlayModule { }
