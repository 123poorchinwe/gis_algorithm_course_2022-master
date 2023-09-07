import { EventEmitter, Injectable } from '@angular/core'
import { v4 as uuidv4 } from 'uuid'
import * as turf from '@turf/turf'
import GeoJSON from '@mapbox/geojson-types'
import {
  GeoJSON2String,
  GeoJsonSource,
  String2GeoJSON,
} from 'src/app/lib/services/geojson-source'
import { GeodeticQuaternaryCode } from 'src/app/lib/services/geohash/geodetic-quaternary-code'
import { QuaternaryCode } from 'src/app/lib/services/geohash/quaternary-code'

@Injectable({
  providedIn: 'root',
})
export class QuadTreeService {
  /**
   * feature 定位事件
   */
  locationFeature: EventEmitter<any> = new EventEmitter()

  private _source: GeoJsonSource
  public get source() {
    return this._source
  }
  public setDisplay(visible: boolean) {
    this._source.maplayer.setVisible(visible)
  }

  /**
   *
   */
  constructor() {
    this._source = new GeoJsonSource()
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
      this.source.geojson_string = event.target.result as string
    }
    reader.readAsText(file, 'utf-8')
  }

  /**
   *
   */
  public saveFile(filename) {
    this.source.saveFile(filename)
  }

  /**
   * 生成网格
   */
  public buildGrid() {
    const gm = new GeodeticQuaternaryCode()
    const m = new QuaternaryCode()

    if (this.source.geojson != null) {
      const geojson = String2GeoJSON(this.source.geojson_string)
      turf.featureEach(geojson, function (currentFeature, featureIndex) {
        //TODO: 请同学们完成
        //=currentFeature
        //=featureIndex
        const row = currentFeature.properties.row
        const column = currentFeature.properties.column
        const deep = currentFeature.properties.deep
        const morton = m.encoding(row, column, deep)
        const box = gm.decoding(morton)
        const feature = turf.polygon([
          [
            [box.west, box.south],
            [box.west, box.north],
            [box.east, box.north],
            [box.east, box.south],
            [box.west, box.south],
          ],
        ])
        currentFeature.properties.geohash = morton
        currentFeature.geometry = feature.geometry
      })
      this.source.geojson_string = GeoJSON2String(geojson, true)
    }
  }

  public mergeGrid() {
    this.buildGrid()
    const geojson = String2GeoJSON(this.source.geojson_string)
    // 初始化每个要素
    turf.featureEach(geojson, function (currentFeature, featureIndex) {
      currentFeature.properties.geohash_former = currentFeature.properties.geohash.substr(
        0,
        currentFeature.properties.deep,
      )
    })
    this.source.geojson_string = GeoJSON2String(geojson, true)
    let res = []
    for (let i = 0; i < geojson.features.length - 1; ) {
      const temp_geohashformer =
        geojson.features[i].properties['geohash_former']
      const temp_value = geojson.features[i].properties['value']
      var newfeature = geojson.features[i]

      if (
        geojson.features[i + 1].properties.geohash_former ==
          temp_geohashformer &&
        geojson.features[i + 1].properties.value == temp_value &&
        geojson.features[i + 2].properties.geohash_former ==
          temp_geohashformer &&
        geojson.features[i + 2].properties.value == temp_value &&
        geojson.features[i + 3].properties.geohash_former ==
          temp_geohashformer &&
        geojson.features[i + 3].properties.value == temp_value
      ) {
        newfeature = turf.union(newfeature, geojson.features[i + 1])
        newfeature = turf.union(newfeature, geojson.features[i + 2])
        newfeature = turf.union(newfeature, geojson.features[i + 3])
        res.push(newfeature)
        i = i + 4
      } else {
        res.push(newfeature)
        i = i + 1
      }
    }
    geojson.features = res
    this.source.geojson_string = GeoJSON2String(geojson, true)
  }
}
