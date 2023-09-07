import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { DelaunayVoronoiRoutingModule } from './delaunay-voronoi-routing.module';
import { DelaunayVoronoiComponent } from './delaunay-voronoi.component';


@NgModule({
  declarations: [
    DelaunayVoronoiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    DelaunayVoronoiRoutingModule
  ],
  bootstrap: [DelaunayVoronoiComponent]
})
export class DelaunayVoronoiModule { }
