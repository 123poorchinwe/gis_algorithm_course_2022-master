import { Injectable, EventEmitter } from '@angular/core'
import {
  GeoJSON2String,
  GeoJsonSource,
  String2GeoJSON,
} from 'src/app/lib/services/geojson-source'
import { v4 as uuidv4 } from 'uuid'
import * as turf from '@turf/turf'
import { Feature } from 'ol'
// import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root',
})
export class MapProjectionService {
  // feature定位事件
  locationFeature: EventEmitter<any> = new EventEmitter()
  //加载文件数据
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

  public createFileName() {
    return uuidv4() + '.json'
  }

  public openFile(file: File) {
    const reader = new FileReader()
    reader.onload = (event) => {
      this.source.geojson_string = event.target.result as string
    }
    reader.readAsText(file, 'utf-8')
  }

  public saveFile(filename) {
    this.source.saveFile(filename)
  }

  //TODO:功能函数
  public ToMercator() {
    if (this.source.geojson == null) {
      return
    }
    const geojson = String2GeoJSON(this.source.geojson_string)
    this.source.geojson_string = GeoJSON2String(turf.toMercator(geojson), true)
    this.displaySource.geojson_string = GeoJSON2String(
      turf.toMercator(geojson),
      true,
    )
  }

  public ToMercator1() {
    const earthRadius = 6378137
    const geojson = String2GeoJSON(this.source.geojson_string)
    if (geojson.type == 'FeatureCollection') {
      geojson.features.forEach((feature) => {
        turf.coordEach(feature, (currentCoord) => {
          const x = (currentCoord[0] * Math.PI) / 180.0
          const y = Math.log(
            Math.tan(((90.0 + currentCoord[1]) * Math.PI) / 360.0),
          )
          currentCoord[0] = earthRadius * x
          currentCoord[1] = earthRadius * y
        })
      })
      this.source.geojson_string = GeoJSON2String(geojson, true)
      this.displaySource.geojson_string = GeoJSON2String(geojson, true)
    }
  }
}
