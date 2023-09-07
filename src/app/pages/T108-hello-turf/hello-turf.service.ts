import { Injectable } from '@angular/core'
import { v4 as uuidv4 } from 'uuid'
import {
  GeoJsonSource,
  GeoJSON2String,
} from 'src/app/lib/services/geojson-source'
import * as turf from '@turf/turf'

import { MapComponent } from './map/map.component'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class HelloTurfService {
  /**
   * 地图组件
   */
  private _map: MapComponent
  public get map() {
    return this._map
  }
  public set map(value) {
    this._map = value
    this._map.map.addLayer(this.bufferSource.maplayer)
    this._map.map.addLayer(this.geojsonSource.maplayer)
  }

  private _geojsonSource: GeoJsonSource
  public get geojsonSource() {
    return this._geojsonSource
  }

  public buffer_radius = 100

  private _bufferSource: GeoJsonSource
  public get bufferSource() {
    return this._bufferSource
  }

  private _activeSource: GeoJsonSource
  public get activeSource() {
    return this._activeSource
  }
  public setActiveSource(name: string) {
    switch (name) {
      case 'source':
        this._activeSource = this._geojsonSource
        break
      case 'buffer':
        this._activeSource = this._bufferSource
        break
      default:
        this._activeSource = this._geojsonSource
        break
    }
  }

  public setSourceDisplay(visible: boolean) {
    this._geojsonSource.maplayer.setVisible(visible)
  }

  public setBufferDisplay(visible: boolean) {
    this._bufferSource.maplayer.setVisible(visible)
  }

  constructor() {
    this._geojsonSource = new GeoJsonSource()
    this._geojsonSource.fromUrl(environment.t108_hello_turf.geojson_url)
    this._bufferSource = new GeoJsonSource()
    this._activeSource = this._geojsonSource
  }

  /**
   *
   * @returns
   */
  public createFileName() {
    return uuidv4() + '.json'
  }

  /**
   *
   * @param sid
   */
  public location(sid) {
    const geo = this.activeSource.getFeatureBySid(sid)
    this.map.zoomToGeometry(geo)
  }

  public openFile(file: File) {
    // 文件数据只放到 geojsonSource 中
    const reader = new FileReader()
    reader.onload = (event) => {
      // this._geojsonSource.geojson_string = event.target.result as string
    }
    reader.readAsText(file, 'utf-8')
  }

  /**
   *
   */
  public saveFile(filename) {
    this.activeSource.saveFile(filename)
  }

  /**
   * buffer 分析
   */
  public buffer() {
    //TODO: buffer分析，对geojsonSource的数据做buffer，并将结果放大 bufferSource中，请同学们实现

    const buffered = turf.buffer(
      this.geojsonSource.geojson,
      this.buffer_radius,
      { units: 'kilometers' },
    )
    this.bufferSource.geojson_string = GeoJSON2String(buffered, true)
  }
}
