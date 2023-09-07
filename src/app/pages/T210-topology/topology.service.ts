import { EventEmitter, Injectable } from '@angular/core'
import { v4 as uuidv4 } from 'uuid'
import * as turf from '@turf/turf'
import polygonize from 'src/app/topoindex'
import {
  GeoJSON2String,
  GeoJsonSource,
  String2GeoJSON,
} from 'src/app/lib/services/geojson-source'
import Node from 'src/app/lib/services/geometry/Node'

@Injectable({
  providedIn: 'root',
})
export class TopologyService {
  /**
   * feature 定位事件
   */
  locationFeature: EventEmitter<any> = new EventEmitter()
  /**
   * 加载文件数据
   */
  loadFile: EventEmitter<any> = new EventEmitter()

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

  /**
   *
   */
  constructor() {
    this._source = new GeoJsonSource()
    this._displaySource = new GeoJsonSource()
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
   * @param file
   */
  public openFile(file: File) {
    const reader = new FileReader()
    reader.onload = (event) => {
      this.loadFile.emit()
      this.source.geojson_string = event.target.result as string
      this.reset()
    }
    reader.readAsText(file, 'utf-8')
  }

  /**
   *
   */
  public saveFile(filename) {
    this.displaySource.saveFile(filename)
  }

  /**
   * 恢复source
   */
  public reset() {
    const geojson = String2GeoJSON(this.source.geojson_string)
    this.displaySource.geojson_string = GeoJSON2String(geojson, true)
  }

  /**
   * 线组合为多边形@turf
   */
  public polygonizeTurf() {
    //TODO: 请同学们完成
    if (this.source.geojson == null) {
      return
    }
    const geojson = String2GeoJSON(this.source.geojson_string)
    this.displaySource.geojson_string = GeoJSON2String(
      turf.polygonize(geojson),
      true,
    )
  }

  /**
   *
   */
  public topology() {
    //TODO: 请同学们完成
    if (this.source.geojson == null) {
      return
    }
    const geojson = String2GeoJSON(this.source.geojson_string)
    this.displaySource.geojson_string = GeoJSON2String(
      polygonize(geojson),
      true,
    )
  }
}
