import { Component, OnDestroy, OnInit } from '@angular/core'

import { GUI } from 'dat.gui'

import { useGeographic } from 'ol/proj'
import Map from 'ol/Map'
import View from 'ol/View'

import TDTLayerFactory from '../../../lib/ol/layer/tdt-layer-factory'
import TDTSourceFactory from '../../../lib/ol/source/tdt-source-factory'

import { TransformService } from '../transform.service'

import { environment } from 'src/environments/environment'

// 天地图 Token
const token = environment.common.tdt.token

@Component({
  selector: 't202-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  public map: Map
  private map_view
  private tdt_img_c_layer
  private tdt_anno_C_layer

  private gui: GUI

  private _locationFeatureSubscription
  private _loadFileSubscription

  constructor(private service: TransformService) {
    this.tdt_img_c_layer = TDTLayerFactory.tdt_vec_c_layer(token)
    this.tdt_anno_C_layer = TDTLayerFactory.tdt_cva_c_layer(token)
    this._locationFeatureSubscription = this.service.locationFeature.subscribe(
      (value) => {
        this.onLocationFeature(value)
      },
    )
    this._loadFileSubscription = this.service.loadFile.subscribe(() => {
      this.reset()
    })
  }

  ngOnInit(): void {
    this.initMap()
    this.initDatGUI()

    this.options.UpAndDown = this.service.up_and_down
    this.options.LeftAndRight = this.service.left_and_right
    this.options.Rotate = this.service.rotate
    // 用于显示名字图层
    this.map.addLayer(this.service.displaySource.maplayer)
  }

  ngOnDestroy(): void {
    // 移除Dat.GUI
    this.removeDatGUI()
    this._locationFeatureSubscription.unsubscribe()
    this._loadFileSubscription.unsubscribe()
  }

  /**
   *
   * @param sid
   */
  public onLocationFeature(sid) {
    const geo = this.service.displaySource.getFeatureBySid(sid)
    this.zoomToGeometry(geo)
  }

  /**
   * 定位要素
   * @param sid
   */
  public zoomToGeometry(geo) {
    if (geo == null || geo == undefined) {
      return
    }
    this.map_view.fit(geo, { padding: [170, 170, 170, 170], minResolution: 50 })
  }

  private readonly options = {
    message: '天地图',
    display: true,
    UpAndDown: 0,
    LeftAndRight: 0,
    Rotate: 0,
    ScaleX: 1,
    ScaleY: 1,
    basemap: 'vector',
    reset: () => {
      this.reset()
    },
    apply: () => {
      this.apply()
    },
  }
  private initDatGUI() {
    this.gui = new GUI({ name: 'TDT' })
    this.gui.add(this.options, 'message')
    this.gui.add(this.options, 'display').onFinishChange((value) => {
      this.service.setDisplay(value)
    })
    this.gui
      .add(this.options, 'UpAndDown')
      .min(-1)
      .max(1)
      .step(0.05)
      .listen()
      .onFinishChange((value) => {
        this.service.up_and_down = value
      })
    this.gui
      .add(this.options, 'LeftAndRight')
      .min(-1)
      .max(1)
      .step(0.05)
      .listen()
      .onFinishChange((value) => {
        this.service.left_and_right = value
      })
    this.gui
      .add(this.options, 'Rotate')
      .min(-180)
      .max(180)
      .step(5)
      .listen()
      .onFinishChange((value) => {
        this.service.rotate = value
      })
    this.gui
      .add(this.options, 'ScaleX')
      .min(0.3)
      .max(3)
      .step(0.1)
      .listen()
      .onFinishChange((value) => {
        this.service.scaleX = value
      })
    this.gui
      .add(this.options, 'ScaleY')
      .min(0.3)
      .max(3)
      .step(0.1)
      .listen()
      .onFinishChange((value) => {
        this.service.scaleY = value
      })
    this.gui
      .add(this.options, 'basemap', ['vector', 'images'])
      .onFinishChange((value) => {
        if (value === 'images') {
          this.tdt_img_c_layer.setSource(
            TDTSourceFactory.tdt_img_c_source(token),
          )
          this.tdt_anno_C_layer.setSource(
            TDTSourceFactory.tdt_cia_c_source(token),
          )
        } else {
          this.tdt_img_c_layer.setSource(
            TDTSourceFactory.tdt_vec_c_source(token),
          )
          this.tdt_anno_C_layer.setSource(
            TDTSourceFactory.tdt_cva_c_source(token),
          )
        }
      })
    this.gui.add(this.options, 'reset')
    this.gui.add(this.options, 'apply')

    // 添加dat.gui到容器
    const t = this.gui.domElement
    document.getElementById('t202-ol-datgui').appendChild(t)
  }

  private removeDatGUI() {
    const t = this.gui.domElement
    t.remove()
  }

  private initMap() {
    //TODO: 设置空间参考
    useGeographic()

    this.map_view = new View({
      center: [150, 0],
      zoom: 1,
    })
    this.map = new Map({
      target: 't202-ol-map',
      layers: [this.tdt_img_c_layer, this.tdt_anno_C_layer],
      view: this.map_view,
    })
  }

  private reset() {
    this.service.reset()
    this.options.UpAndDown = this.service.up_and_down
    this.options.LeftAndRight = this.service.left_and_right
    this.options.Rotate = this.service.rotate
    this.options.ScaleX = this.service.scaleX
    this.options.ScaleY = this.service.scaleY
  }

  private apply() {
    this.service.apply()
  }
}
