import { Component, OnDestroy, OnInit } from '@angular/core'
import { GUI } from 'dat.gui'

import { useGeographic } from 'ol/proj'
import Map from 'ol/Map'
import View from 'ol/View'

import TDTLayerFactory from '../../../lib/ol/layer/tdt-layer-factory'
import TDTSourceFactory from '../../../lib/ol/source/tdt-source-factory'

import { BufferOverlayService } from '../buffer-overlay.service'

import { environment } from 'src/environments/environment'

// 天地图Token
const token = environment.common.tdt.token
@Component({
  selector: 't216-map',
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

  constructor(private service: BufferOverlayService) {
    this.tdt_img_c_layer = TDTLayerFactory.tdt_vec_c_layer(token)
    this.tdt_anno_C_layer = TDTLayerFactory.tdt_cva_c_layer(token)
    this._locationFeatureSubscription = this.service.locationFeature.subscribe(
      (value) => {
        this.onLocationFeature(value)
      },
    )
  }

  ngOnInit(): void {
    this.initMap()
    this.initDatGUI()
    this.service.map = this
    // this.map.addLayer(this.service.displaySource.maplayer)
  }

  ngOnDestroy(): void {
    //移除Dat.GUI
    this.removeDatGUI()
    this._locationFeatureSubscription.unsubscribe()
    // this._loadFileSubscription.unsubscribe()
  }

  public onLocationFeature(sid) {
    const geo = this.service.displaySource.getFeatureBySid(sid)
    this.zoomToGeometry(geo)
  }

  public zoomToGeometry(geo) {
    if (geo == null || geo == undefined) {
      return
    }
    this.map_view.fit(geo, {
      padding: [170, 170, 170, 170],
      minResolution: 10,
    })
  }

  private initDatGUI() {
    const options = {
      message: '天地图',
      basemap: 'vector',
      landuse: true,
      soil: true,
      serwers: true,
      candidates: true,
      editLayer: 'landuse',
      serwersBufferSize: this.service.buffersize,
    }
    this.gui = new GUI({ name: 'TDT' })
    this.gui.add(options, 'message')
    this.gui.add(options, 'landuse').onFinishChange((value) => {
      this.service.setLanduseDisplay(value)
    })
    this.gui.add(options, 'soil').onFinishChange((value) => {
      this.service.setSoilDisplay(value)
    })
    this.gui.add(options, 'serwers').onFinishChange((value) => {
      this.service.setSerwersDisplay(value)
    })
    this.gui.add(options, 'candidates').onFinishChange((value) => {
      this.service.setCandidatesDisplay(value)
    })
    this.gui
      .add(options, 'serwersBufferSize')
      .min(0)
      .max(500)
      .step(10)
      .listen()
      .onFinishChange((value) => {
        this.service.buffersize = value
      })
    this.gui
      .add(options, 'basemap', ['vector', 'images'])
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
    //TODO:
    this.gui
      .add(options, 'editLayer', ['landuse', 'soil', 'serwers', 'candidates'])
      .onFinishChange((value) => {
        this.service.setActiveSource(value)
      })
    //添加dat.gui到容器
    const t = this.gui.domElement
    document.getElementById('t216-ol-datgui').appendChild(t)
  }

  private removeDatGUI() {
    const t = this.gui.domElement
    t.remove()
  }

  private initMap() {
    useGeographic()

    this.map_view = new View({
      center: [150, 0],
      zoom: 1,
    })
    this.map = new Map({
      target: 't216-ol-map',
      layers: [this.tdt_img_c_layer, this.tdt_anno_C_layer],
      view: this.map_view,
    })
  }
}
