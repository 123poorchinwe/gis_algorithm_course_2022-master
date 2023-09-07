import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeComponent } from './attribute/attribute.component';
import { BufferOverlayComponent } from './buffer-overlay.component';
import { GeoJsonComponent } from './geojson/geojson.component';

const routes: Routes = [
  {
    path: '', component: BufferOverlayComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'json',
      },
      {
        path: 'json',
        component: GeoJsonComponent,
      },
      {
        path: 'table',
        component: AttributeComponent,
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
export class BufferOverlayRoutingModule { }
