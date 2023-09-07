import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { GUI } from 'dat.gui';

import { useGeographic } from 'ol/proj';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import TDT from '../../../lib/ol/source/tdt';
import TDTLayerFactory from '../../../lib/ol/layer/tdt-layer-factory';


// 天地图 Token
const token = environment.common.tdt.token;

@Component({
  selector: 't109-tdt',
  templateUrl: './tdt.component.html',
  styleUrls: ['./tdt.component.scss']
})
export class TdtComponent implements OnInit, AfterViewInit, OnDestroy {

  private map: Map | undefined;

  private tdt_img_c_layer: TileLayer<TDT>;
  private tdt_anno_C_layer: TileLayer<TDT>;

  private gui: GUI;

  constructor() {
    this.tdt_img_c_layer = TDTLayerFactory.tdt_img_c_layer(token);
    this.tdt_anno_C_layer = TDTLayerFactory.tdt_cia_c_layer(token);
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
      source: 'images',
    };
    this.gui = new GUI({ name: 'TDT' });
    this.gui.add(options, 'message');
    this.gui.add(options, 'source', ['images', 'vector']).onFinishChange((value) => {
      //TODO: 如何实现地理地图切换的?
      if (value === 'images') {
        this.map.removeLayer(this.tdt_img_c_layer);
        this.tdt_img_c_layer = TDTLayerFactory.tdt_img_c_layer(token);
        this.map.addLayer(this.tdt_img_c_layer);

        this.map.removeLayer(this.tdt_anno_C_layer);
        this.tdt_anno_C_layer = TDTLayerFactory.tdt_cia_c_layer(token);
        this.map.addLayer(this.tdt_anno_C_layer);
      } else {
        this.map.removeLayer(this.tdt_img_c_layer);
        this.tdt_img_c_layer = TDTLayerFactory.tdt_vec_c_layer(token);
        this.map.addLayer(this.tdt_img_c_layer);

        this.map.removeLayer(this.tdt_anno_C_layer);
        this.tdt_anno_C_layer = TDTLayerFactory.tdt_cva_c_layer(token);
        this.map.addLayer(this.tdt_anno_C_layer);
      }
    });

    // 添加dat.gui到容器
    const t = this.gui.domElement;
    document.getElementById('t109-tdt-ol-datgui').appendChild(t);
  }

  private removeDatGUI() {
    const t = this.gui.domElement;
    t.remove();
  }


  private initMap() {
    //设置空间参考
    useGeographic();

    //TODO: 地图初始化剩余部分完成天地图底图加载，请同学们实现
    this.map = new Map({
      target: 't109-tdt-ol-map',
      layers: [this.tdt_img_c_layer, this.tdt_anno_C_layer],
      view: new View({
        center: [118.0, 32.0],
        zoom: 6,
      })
    });
  }

}