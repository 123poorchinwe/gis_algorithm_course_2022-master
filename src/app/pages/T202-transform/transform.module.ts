import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { TransformRoutingModule } from './transform-routing.module';
import { TransformComponent } from './transform.component';
import { AttributeComponent } from './attribute/attribute.component';
import { GeoJsonComponent } from './geojson/geojson.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    TransformComponent,
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
    NzRadioModule,
    NzTableModule,
    NzIconModule,
    CodemirrorModule,
    TransformRoutingModule
  ],
  bootstrap: [TransformComponent]
})
export class TransformModule { }
