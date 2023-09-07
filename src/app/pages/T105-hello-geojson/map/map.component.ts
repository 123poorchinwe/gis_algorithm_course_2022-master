import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
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

import { HelloGeoJsonService } from '../hello-geo-json.service';

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
  selector: 't105-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  private map;
  private map_view;
  private tdt_img_c_layer;
  private tdt_anno_C_layer;
  private geojson_layer;

  private geojson_source;

  private gui: GUI;

  private _geojson = undefined;
  @Input()
  public get geojson() {
    return this._geojson;
  }
  public set geojson(value) {
    this._geojson = value;

    //TODO: 矢量图层数据源是如何更新的？
    this.geojson_layer.setSource(undefined);
    if (value != undefined) {
      this.geojson_source = new VectorSource({
        features: new GeoJSON().readFeatures(value),
      });
      this.geojson_layer.setSource(this.geojson_source);
    }
  }

  /**
   * 定位要素
   * @param sid
   */
  public locationFeature(sid) {
    //TODO: 如何实现矢量图层要素的定位和地图放大？请同学们实现
    if ((this.geojson === undefined) || (sid < 0)) {
      return;
    }
    const features = this.geojson_source.getFeatures();
    features.forEach(feature => {
      const id = feature.getProperties()['sid'];
      if (id == sid) {
        const geo = feature.getGeometry();
        this.map_view.fit(geo, { padding: [170, 170, 170, 170], minResolution: 50 });
      }
    });
  }

  constructor(private service: HelloGeoJsonService) {
    //TODO: 这句话是什么含义？
    this.service.map = this;

    this.tdt_img_c_layer = TDTLayerFactory.tdt_vec_c_layer(token);
    this.tdt_anno_C_layer = TDTLayerFactory.tdt_cva_c_layer(token);
    //TODO: 矢量图层是如何创建的？
    //TODO: 地图图层样式是如何定义的？
    this.geojson_layer = new VectorLayer({
      style: styleFunction,
    });
  }

  ngOnInit(): void {
    this.initMap();

    this.initDatGUI();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    // 移除Dat.GUI
    this.removeDatGUI();
  }

  private initDatGUI() {
    const options = {
      message: '天地图',
      basemap: 'vector',
    };
    this.gui = new GUI({ name: 'TDT' });
    this.gui.add(options, 'message');
    this.gui.add(options, 'basemap', ['vector', 'images']).onFinishChange((value) => {
      //TODO: 栅格图层数据源是如何更新的？
      if (value === 'images') {
        this.tdt_img_c_layer.setSource(TDTSourceFactory.tdt_img_c_source(token));
        this.tdt_anno_C_layer.setSource(TDTSourceFactory.tdt_eia_c_source(token));
      } else {
        this.tdt_img_c_layer.setSource(TDTSourceFactory.tdt_vec_c_source(token));
        this.tdt_anno_C_layer.setSource(TDTSourceFactory.tdt_cva_c_source(token));
      }
    });

    // 添加dat.gui到容器
    const t = this.gui.domElement;
    document.getElementById('t105-ol-datgui').appendChild(t);
  }

  private removeDatGUI() {
    const t = this.gui.domElement;
    t.remove();
  }

  private initMap() {

    //设置空间参考
    useGeographic();

    //TODO: 地图初始化剩余部分完成，请同学们实现
    this.map_view = new View({
      center: [150, 0],
      zoom: 1,
    });
    this.map = new Map({
      target: 't105-ol-map',
      layers: [this.tdt_img_c_layer, this.tdt_anno_C_layer, this.geojson_layer],
      view: this.map_view
    });
  }

}