import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloCanvasComponent } from './hello-canvas.component';

const routes: Routes = [
  {
    path: '',
    component: HelloCanvasComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'draw-canvas',
      },
      {
        path: 'draw-canvas',
        loadChildren: () => import('./draw-canvas/draw-canvas.module').then(m => m.DrawCanvasModule),
      },
      {
        path: 'animation-canvas',
        loadChildren: () => import('./animation-canvas/animation-canvas.module').then(m => m.AnimationCanvasModule),
      },
      {
        path: 'parabolic-motion',
        loadChildren: () => import('./parabolic-motion/parabolic-motion.module').then(m => m.ParabolicMotionModule),
      },
      {
        path: 'goes-west-loop',
        loadChildren: () => import('./goes-west-loop/goes-west-loop.module').then(m => m.GoesWestLoopModule),
      },
      {
        path: '**',
        redirectTo: 'draw-canvas',
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloCanvasRoutingModule { }
