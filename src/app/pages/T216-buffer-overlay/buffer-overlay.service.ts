import { Injectable, EventEmitter } from '@angular/core'
import { v4 as uuidv4 } from 'uuid'
import * as turf from '@turf/turf'
import {
  GeoJSON2String,
  GeoJsonSource,
  String2GeoJSON,
} from 'src/app/lib/services/geojson-source'
import { MapComponent } from './map/map.component'
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root',
})
export class BufferOverlayService {
  //feature定位事件
  locationFeature: EventEmitter<any> = new EventEmitter()

  // 地图组件
  private _map: MapComponent
  public get map() {
    return this._map
  }
  public set map(value) {
    this._map = value
    this._map.map.addLayer(this.landuseSource.maplayer)
    this._map.map.addLayer(this.soilSource.maplayer)
    this._map.map.addLayer(this.serwersSource.maplayer)
    this._map.map.addLayer(this.candidatesSource.maplayer)
  }

  public _buffersize = 300
  public get buffersize() {
    return this._buffersize
  }
  public set buffersize(value) {
    this._buffersize = value
  }

  private _source: GeoJsonSource
  public get source() {
    return this._source
  }

  private _displaySource: GeoJsonSource
  public get displaySource() {
    return this._displaySource
  }
  public setDisplay(visible: boolean) {
    this._displaySource.maplayer.setVisible(visible)
  }

  private _landuseSource: GeoJsonSource
  public get landuseSource() {
    return this._landuseSource
  }
  public setLanduseDisplay(visible: boolean) {
    return this._landuseSource.maplayer.setVisible(visible)
  }

  private _soilSource: GeoJsonSource
  public get soilSource() {
    return this._soilSource
  }
  public setSoilDisplay(visible: boolean) {
    return this._soilSource.maplayer.setVisible(visible)
  }

  private _serwersSource: GeoJsonSource
  public get serwersSource() {
    return this._serwersSource
  }
  public setSerwersDisplay(visible: boolean) {
    return this._serwersSource.maplayer.setVisible(visible)
  }

  private _candidatesSource: GeoJsonSource
  public get candidatesSource() {
    return this._candidatesSource
  }
  public setCandidatesDisplay(visible: boolean) {
    return this._candidatesSource.maplayer.setVisible(visible)
  }

  private _activeSource: GeoJsonSource
  public get activeSource() {
    return this._activeSource
    // return ''
  }
  public setActiveSource(name: string) {
    switch (name) {
      case 'landeuse':
        this._activeSource = this._landuseSource
        break
      case 'soil':
        this._activeSource = this._soilSource
        break
      case 'serwers':
        this._activeSource = this._serwersSource
        break
      case 'candidates':
        this._activeSource = this._candidatesSource
        break
      default:
        this._activeSource = this._landuseSource
        break
    }
  }

  constructor() {
    this._displaySource = new GeoJsonSource()
    this._landuseSource = new GeoJsonSource()
    this._landuseSource.fromUrl(environment.t216_buffer_overlay.landuseurl)
    this._soilSource = new GeoJsonSource()
    this._soilSource.fromUrl(environment.t216_buffer_overlay.soilurl)
    this._serwersSource = new GeoJsonSource()
    this._serwersSource.fromUrl(environment.t216_buffer_overlay.serwersurl)
    this._candidatesSource = new GeoJsonSource()
    this._activeSource = this._landuseSource
  }

  public createFileName() {
    return uuidv4() + '.json'
  }

  public location(sid) {
    const geo = this.activeSource.getFeatureBySid(sid)
    this.map.zoomToGeometry(geo)
  }

  public openFile(file: File) {
    const reader = new FileReader()
    reader.onload = (event) => {
      // TODO:不知道填什么
    }
    reader.readAsText(file, 'utf-8')
  }

  public saveFile(filename) {
    this.activeSource.saveFile(filename)
  }

  public bufferoverlay() {
    const landuseFeature = this.unionPolygon(
      this.selectLanduse(this.landuseSource.geojson),
    )
    const soilFeature = this.unionPolygon(
      this.selectSoil(this.soilSource.geojson),
    )
    const serwersBuffer = turf.buffer(
      this.serwersSource.geojson,
      this.buffersize,
      { units: 'kilometers' },
    )
    const serwersFeature = this.unionPolygon(this.selectSerwers(serwersBuffer))

    let intersection = turf.intersect(landuseFeature, soilFeature)

    intersection = turf.intersect(intersection, serwersFeature)

    this.candidatesSource.geojson_string = GeoJSON2String(intersection, true)
  }

  private selectLanduse(geojson) {
    const features = []
    geojson.features.forEach((feature) => {
      if (feature.properties['LUCODE'] == 300) {
        features.push(feature)
      }
    })
    return features
  }

  private selectSoil(geojson) {
    const features = []
    geojson.features.forEach((feature) => {
      if (feature.properties['SUIT'] >= 2) {
        features.push(feature)
      }
    })
    return features
  }

  private selectSerwers(geojson) {
    return geojson.features
  }

  private unionPolygon(features) {
    let f1 = features[0]
    for (let i = 1; i < features.length; i++) {
      let f2 = features[i]
      f1 = turf.union(f1, f2)
    }
    return f1
  }
}
