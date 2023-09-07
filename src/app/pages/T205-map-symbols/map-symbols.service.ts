import { EventEmitter, Injectable } from '@angular/core'
import { v4 as uuidv4 } from 'uuid'
import {
  GeoJSON2String,
  GeoJsonSource,
  String2GeoJSON,
} from 'src/app/lib/services/geojson-source'

@Injectable({
  providedIn: 'root',
})
export class MapSymbolsService {
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
  constructor() {
    this._source = new GeoJsonSource()
    this._displaySource = new GeoJsonSource()
  }

  /**
   * 恢复source
   */
  public reset() {
    const geojson = String2GeoJSON(this.source.geojson_string)
    this.displaySource.geojson_string = GeoJSON2String(geojson, true)
  }

  /**
   *
   * @returns
   */
  public createFileName() {
    return uuidv4() + '.json'
  }
  public saveFile(filename) {
    this.displaySource.saveFile(filename)
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
}
