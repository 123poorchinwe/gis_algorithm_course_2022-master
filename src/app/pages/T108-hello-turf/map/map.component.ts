import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

import { GUI } from 'dat.gui';

import { useGeographic } from 'ol/proj';

import Map from 'ol/Map';
import View from 'ol/View';

import TDTLayerFactory from '../../../lib/ol/layer/tdt-layer-factory';
import TDTSourceFactory from '../../../lib/ol/source/tdt-source-factory';

import { HelloTurfService } from '../hello-turf.service';

// 天地图 Token
const token = environment.common.tdt.token;

@Component({
  selector: 't108-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  public map: Map;
  private map_view;
  private tdt_img_c_layer;
  private tdt_anno_C_layer;

  private gui: GUI;

  constructor(private service: HelloTurfService) {
    this.tdt_img_c_layer = TDTLayerFactory.tdt_vec_c_layer(token);
    this.tdt_anno_C_layer = TDTLayerFactory.tdt_cva_c_layer(token);
  }

  ngOnInit(): void {
    this.initMap();
    this.initDatGUI();
    this.service.map = this;
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    // 移除Dat.GUI
    this.removeDatGUI();
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

  private initDatGUI() {
    const options = {
      message: '天地图',
      basemap: 'vector',
      displaySource: true,
      displayBuffer: true,
      editLayer: 'source',
      bufferRadius: this.service.buffer_radius
    };
    this.gui = new GUI({ name: 'TDT' });
    this.gui.add(options, 'message');
    this.gui.add(options, 'displaySource').onFinishChange((value) => {
      this.service.setSourceDisplay(value);
    });
    this.gui.add(options, 'displayBuffer').onFinishChange((value) => {
      this.service.setBufferDisplay(value);
    });
    this.gui.add(options, 'editLayer', ['source', 'buffer']).onFinishChange((value) => {
      this.service.setActiveSource(value);
    });
    this.gui.add(options, 'basemap', ['vector', 'images']).onFinishChange((value) => {
      if (value === 'images') {
        this.tdt_img_c_layer.setSource(TDTSourceFactory.tdt_img_c_source(token));
        this.tdt_anno_C_layer.setSource(TDTSourceFactory.tdt_eia_c_source(token));
      } else {
        this.tdt_img_c_layer.setSource(TDTSourceFactory.tdt_vec_c_source(token));
        this.tdt_anno_C_layer.setSource(TDTSourceFactory.tdt_cva_c_source(token));
      }
    });
    this.gui.add(options, 'bufferRadius').min(1).max(100).step(1).onFinishChange((value) => {
      this.service.buffer_radius = value;
    });

    // 添加dat.gui到容器
    const t = this.gui.domElement;
    document.getElementById('t108-ol-datgui').appendChild(t);
  }

  private removeDatGUI() {
    const t = this.gui.domElement;
    t.remove();
  }

  private initMap() {
    //设置空间参考
    useGeographic();
    this.map_view = new View({
      center: [150, 0],
      zoom: 1,
    });
    this.map = new Map({
      target: 't108-ol-map',
      layers: [this.tdt_img_c_layer, this.tdt_anno_C_layer],
      view: this.map_view
    });

    //TODO: 地图初始化剩余部分完成，请同学们实现

  }
}
