import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloOpenLayersComponent } from './hello-open-layers.component';

const routes: Routes = [
  {
    path: '',
    component: HelloOpenLayersComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'osm',
      },
      {
        path: 'osm',
        loadChildren: () => import('./osm/osm.module').then(m => m.OsmModule),
      },
      {
        path: 'tdt',
        loadChildren: () => import('./tdt/tdt.module').then(m => m.TdtModule),
      },
      {
        path: '**',
        redirectTo: 'draw-canvas',
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloOpenLayersRoutingModule { }
