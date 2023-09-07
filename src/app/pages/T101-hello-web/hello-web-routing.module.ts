import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWebComponent } from './hello-web.component';

const routes: Routes = [
  {
    path: '',
    component: HelloWebComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'maching',
      },
      {
        path: 'maching',
        loadChildren: () => import('./macthing/macthing.module').then(m => m.MacthingModule),
      },
      {
        path: 'snowflakes',
        loadChildren: () => import('./snowflakes/snowflakes.module').then(m => m.SnowflakesModule),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'maching',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloWebRoutingModule { }
