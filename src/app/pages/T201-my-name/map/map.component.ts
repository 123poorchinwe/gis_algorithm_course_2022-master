import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GUI } from 'dat.gui';

import { useGeographic } from 'ol/proj';
import Map from 'ol/Map';
import View from 'ol/View';

// import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';

// import Circle from 'ol/geom/Circle';
// import Feature from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';
import VectorSource from 'ol/source/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';

import TDTLayerFactory from '../../../lib/ol/layer/tdt-layer-factory';
import TDTSourceFactory from '../../../lib/ol/source/tdt-source-factory';
import { MyNameService } from '../my-name.service';

// 天地图 Token
const token = environment.common.tdt.token;
// GeoJson图层地图样式
const image = new CircleStyle({
  radius: 5,
  fill: null,
  stroke: new Stroke({ color: 'red', width: 1 }),
});

const styles = {
  'Point': new Style({
    image: image,
  }),
  'LineString': new Style({
    stroke: new Stroke({
      color: 'green',
      width: 1,
    }),
  }),
  'MultiLineString': new Style({
    stroke: new Stroke({
      color: 'green',
      width: 1,
    }),
  }),
  'MultiPoint': new Style({
    image: image,
  }),
  'MultiPolygon': new Style({
    stroke: new Stroke({
      color: 'yellow',
      width: 1,
    }),
    fill: new Fill({
      color: 'rgba(255, 255, 0, 0.1)',
    }),
  }),
  'Polygon': new Style({
    stroke: new Stroke({
      color: 'blue',
      lineDash: [4],
      width: 3,
    }),
    fill: new Fill({
      color: 'rgba(0, 0, 255, 0.1)',
    }),
  }),
  'GeometryCollection': new Style({
    stroke: new Stroke({
      color: 'magenta',
      width: 2,
    }),
    fill: new Fill({
      color: 'magenta',
    }),
    image: new CircleStyle({
      radius: 10,
      fill: null,
      stroke: new Stroke({
        color: 'magenta',
      }),
    }),
  }),
  'Circle': new Style({
    stroke: new Stroke({
      color: 'red',
      width: 2,
    }),
    fill: new Fill({
      color: 'rgba(255,0,0,0.2)',
    }),
  }),
};
const styleFunction = function (feature) {
  return styles[feature.getGeometry().getType()];
};
@Component({
  selector: 't201-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public map: Map;
  private map_view;
  private tdt_img_c_layer;
  private tdt_anno_C_layer;

  private gui: GUI;

  private _locationFeatureSubscription;
  private _loadFileSubscription;
  private _rateChangeSubscription;
  constructor(private service: MyNameService) {
    this.tdt_img_c_layer = TDTLayerFactory.tdt_vec_c_layer(token);
    this.tdt_anno_C_layer = TDTLayerFactory.tdt_cva_c_layer(token);
    this._locationFeatureSubscription = this.service.locationFeature.subscribe((value) => {
      this.onLocationFeature(value);
    });
  }


  ngOnInit(): void {
    this.initMap();
    this.map.addLayer(this.service.source.maplayer);
  }

  /**
   *
   * @param sid
   */
   public onLocationFeature(sid) {
    const geo = this.service.source.getFeatureBySid(sid);
    this.zoomToGeometry(geo);
  }

  /**
   * 定位要素
   * @param sid
   */
  public zoomToGeometry(geo) {
    if ((geo == null) || (geo == undefined)) {
      return;
    }
    this.map_view.fit(geo, { padding: [170, 170, 170, 170], minResolution: 50 });
  }
  private initMap() {
    useGeographic();

    this.map_view = new View({
      center: [150, 0],
      zoom: 1,
    });
    this.map = new Map({
      target: 't201-ol-map',
      layers: [this.tdt_img_c_layer, this.tdt_anno_C_layer],
      view: this.map_view
    });
  }
  
}
