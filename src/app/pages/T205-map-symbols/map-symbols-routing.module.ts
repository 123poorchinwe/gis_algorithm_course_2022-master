import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AttributeComponent } from './attribute/attribute.component'
import { GeoJsonComponent } from './geojson/geojson.component'
import { MapSymbolsComponent } from './map-symbols.component'

const routes: Routes = [
  {
    path: '',
    component: MapSymbolsComponent,
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
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapSymbolsRoutingModule {}
