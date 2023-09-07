// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  productionName: 'GIS Algorithm Course',

  common: {
    tdt: {
      token: 'fa4d527766d327e8621373a71df30422', //TODO: 需要自行申请
    },
  },

  t101_hello_web: {
    title: 'T101 Hello Web',
  },

  t102_hello_canvas: {
    title: 'T102 Hello Canvas',

    goes_west_loop: {
      frameUrl: 'assets/images/GOES17/frames.json',
      imageBaseUrl: 'assets/images/GOES17/',
    },
  },

  t103_hello_mouse: {
    title: 'T103 Hello Mouse',
  },

  t104_hello_file: {
    title: 'T104 Hello File',

    dataUrl: 'assets/geojson/dinagat_islands.json',
  },

  t105_hello_geojson: {
    title: 'T105 Hello GeoJson',
  },

  t106_hello_shapefile: {
    title: 'T106 Hello Shapefile',
  },

  t107_hello_cg: {
    title: 'T107 Hello CG',
  },

  t108_hello_turf: {
    title: 'T108 Hello Turf',
    geojson_url: 'assets/geojson/point_feature.json',
  },

  t109_hello_openlayers: {
    title: 'T109 Hello Openlayers',
  },

  t201_my_name: {
    title: 'T201 My Name',
  },

  t202_transform: {
    title: 'T202 Transform',
  },

  t203_map_projection: {
    title: 'T203 MapProjection',
  },

  t204_map_measure: {
    title: 'T204 MapMeasure',
  },

  t205_map_symbols: {
    title: 'T205 MapSymbols',
  },

  t206_raster2vector: {
    title: 'T206 Raster2Vector',
  },

  t207_vector2raster: {
    title: 'T207 Vector2Raster',
  },

  t208_douglas_peuker: {
    title: 'T208 Douglas Peuker',
  },

  t209_smooth: {
    title: 'T209 Smooth',
  },

  t210_topology: {
    title: 'T210 Topology',
  },

  t211_quadtree: {
    title: 'T211 QuadTree',
  },

  t212_rtree: {
    title: 'T212 RTree',
  },

  t213_idw: {
    title: 'T213 IDW',
  },

  t214_kriging: {
    title: 'T214 Kriging',
  },

  t215_delanuany_voronoi: {
    title: 'T215 Delaunay Voronoi',
  },

  t216_buffer_overlay: {
    title: 'T216 Buffer Overlay',
    landuseurl: 'assets/data/aquafarm/landuse.json',
    soilurl: 'assets/data/aquafarm/soil.json',
    serwersurl: 'assets/data/aquafarm/sewers.json',
  },

  t217_terrian_factor: {
    title: 'T217 Terrian Factor',
  },

  t218_terrian_feature: {
    title: 'T218 Terrian Feature',
  },

  t219_grid: {
    title: 'T219 Grid',
  },

  t220_aggregation: {
    title: 'T220 Aggregation',
  },

  t221_classification: {
    title: 'T221 Classification',
  },

  t222_correlation: {
    title: 'T222 Correlation',
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
