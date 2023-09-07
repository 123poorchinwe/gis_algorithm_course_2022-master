import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 't101-hello-web',
    loadChildren: () => import('./pages/T101-hello-web/hello-web.module').then(m => m.HelloWebModule)
  },
  {
    path: 't102-hello-canvas',
    loadChildren: () => import('./pages/T102-hello-canvas/hello-canvas.module').then(m => m.HelloCanvasModule)
  },
  {
    path: 't103-hello-mouse',
    loadChildren: () => import('./pages/T103-hello-mouse/hello-mouse.module').then(m => m.HelloMouseModule)
  },
  {
    path: 't104-hello-file',
    loadChildren: () => import('./pages/T104-hello-file/hello-file.module').then(m => m.HelloFileModule)
  },
  {
    path: 't105-hello-geojson',
    loadChildren: () => import('./pages/T105-hello-geojson/hello-geo-json.module').then(m => m.HelloGeoJsonModule)
  },
  {
    path: 't106-hello-shapefile',
    loadChildren: () => import('./pages/T106-hello-shapefile/hello-shapefile.module').then(m => m.HelloShapefileModule)
  },
  {
    path: 't107-hello-cg',
    loadChildren: () => import('./pages/T107-hello-cg/hello-cg.module').then(m => m.HelloCGModule)
  },
  {
    path: 't108-hello-turf',
    loadChildren: () => import('./pages/T108-hello-turf/hello-turf.module').then(m => m.HelloTurfModule)
  },
  {
    path: 't109-hello-openlayers',
    loadChildren: () => import('./pages/T109-hello-openlayers/hello-open-layers.module').then(m => m.HelloOpenLayersModule)
  },
  {
    path: 't201-my-name',
    loadChildren: () => import('./pages/T201-my-name/my-name.module').then(m => m.MyNameModule)
  },
  {
    path: 't202-transform',
    loadChildren: () => import('./pages/T202-transform/transform.module').then(m => m.TransformModule)
  },
  {
    path: 't203-map-projection',
    loadChildren: () => import('./pages/T203-map-projection/map-projection.module').then(m => m.MapProjectionModule)
  },
  {
    path: 't204-map-measure',
    loadChildren: () => import('./pages/T204-map-measure/map-measure.module').then(m => m.MapMeasureModule)
  },
  {
    path: 't205-map-symbols',
    loadChildren: () => import('./pages/T205-map-symbols/map-symbols.module').then(m => m.MapSymbolsModule)
  },
  {
    path: 't206-raster2vector',
    loadChildren: () => import('./pages/T206-raster2vector/raster2-vector.module').then(m => m.Raster2VectorModule)
  },
  {
    path: 't207-vector2raster',
    loadChildren: () => import('./pages/T207-vector2raster/vector2-raster.module').then(m => m.Vector2RasterModule)
  },
  {
    path: 't208-douglas-peuker',
    loadChildren: () => import('./pages/T208-douglas-peuker/douglas-peuker.module').then(m => m.DouglasPeukerModule)
  },
  {
    path: 't209-smooth',
    loadChildren: () => import('./pages/T209-smooth/smooth.module').then(m => m.SmoothModule)
  },
  {
    path: 't210-topology',
    loadChildren: () => import('./pages/T210-topology/topology.module').then(m => m.TopologyModule)
  },
  {
    path: 't211-quadtree',
    loadChildren: () => import('./pages/T211-quadtree/quad-tree.module').then(m => m.QuadTreeModule)
  },
  {
    path: 't212-rtree',
    loadChildren: () => import('./pages/T212-rtree/rtree.module').then(m => m.RTreeModule)
  },
  {
    path: 't213-idw',
    loadChildren: () => import('./pages/T213-idw/idw.module').then(m => m.IDWModule)
  },
  {
    path: 't214-kriging',
    loadChildren: () => import('./pages/T214-kriging/kriging.module').then(m => m.KrigingModule)
  },
  {
    path: 't215-delaunay-voronoi',
    loadChildren: () => import('./pages/T215-delaunay-voronoi/delaunay-voronoi.module').then(m => m.DelaunayVoronoiModule)
  },
  {
    path: 't216-buffer-overlay',
    loadChildren: () => import('./pages/T216-buffer-overlay/buffer-overlay.module').then(m => m.BufferOverlayModule)
  },
  {
    path: 't217-terrian-factor',
    loadChildren: () => import('./pages/T217-terrian-factor/terrian-factor.module').then(m => m.TerrianFactorModule)
  },
  {
    path: 't218-terrian-feature',
    loadChildren: () => import('./pages/T218-terrian-feature/terrian-feature.module').then(m => m.TerrianFeatureModule)
  },
  {
    path: 't219-grid',
    loadChildren: () => import('./pages/T219-grid/grid.module').then(m => m.GridModule)
  },
  {
    path: 't220-aggregation',
    loadChildren: () => import('./pages/T220-aggregation/aggregation.module').then(m => m.AggregationModule)
  },
  {
    path: 't221-classification',
    loadChildren: () => import('./pages/T221-classification/classification.module').then(m => m.ClassificationModule)
  },
  {
    path: 't222-correlation',
    loadChildren: () => import('./pages/T222-correlation/correlation.module').then(m => m.CorrelationModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// @NgModule({
//   imports: [RouterModule.forRoot(
//     routes,
//     {
//       enableTracing: true, // <-- debugging purposes only
//       preloadingStrategy: SelectivePreloadingStrategyService,
//     }
//   )],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
