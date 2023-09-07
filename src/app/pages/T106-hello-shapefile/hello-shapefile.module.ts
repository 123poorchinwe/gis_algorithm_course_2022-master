import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { HelloShapefileRoutingModule } from './hello-shapefile-routing.module';

import { HelloShapefileComponent } from './hello-shapefile.component';
import { GeoJsonTableComponent } from './geojson-table/geojson-table.component';
import { AttributeTableComponent } from './attribute-table/attribute-table.component';

@NgModule({
  declarations: [
    GeoJsonTableComponent,
    AttributeTableComponent,
    HelloShapefileComponent,
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
    HelloShapefileRoutingModule
  ],
  bootstrap: [HelloShapefileComponent]
})
export class HelloShapefileModule { }
