import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeTableComponent } from './attribute-table/attribute-table.component';
import { GeoJsonTableComponent } from './geojson-table/geojson-table.component';
import { HelloShapefileComponent } from './hello-shapefile.component';

const routes: Routes = [
  {
    path: '',
    component: HelloShapefileComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'json',
      },
      {
        path: 'json',
        component: GeoJsonTableComponent,
      },
      {
        path: 'table',
        component: AttributeTableComponent,
      },
      {
        path: '**',
        redirectTo: 'json',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloShapefileRoutingModule { }
