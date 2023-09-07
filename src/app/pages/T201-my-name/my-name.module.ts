import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { MyNameRoutingModule } from './my-name-routing.module';
import { MyNameComponent } from './my-name.component';
import { GeoJsonComponent } from './geojson/geojson.component';
import { MapComponent } from './map/map.component';
import { AttributeComponent } from './attribute/attribute.component';

@NgModule({
  declarations: [
    MyNameComponent,
    GeoJsonComponent,
    MapComponent,
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
    MyNameRoutingModule
  ],
  bootstrap: [MyNameComponent]
})
export class MyNameModule { }
