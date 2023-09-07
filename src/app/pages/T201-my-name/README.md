import { EventEmitter, Injectable } from '@angular/core'
import { v4 as uuidv4 } from 'uuid'
import * as turf from '@turf/turf'
import {
  GeoJSON2String,
  GeoJsonSource,
  String2GeoJSON,
} from 'src/app/lib/services/geojson-source'

@Injectable({
  providedIn: 'root',
})
export class DouglasPeukerService {
  /**
   * feature 定位事件
   */
  locationFeature: EventEmitter<any> = new EventEmitter()
  /**
   * 加载文件数据
   */
  loadFile: EventEmitter<any> = new EventEmitter()
  /**
   * 数据压缩比率变化
   */
  rateChange: EventEmitter<any> = new EventEmitter()

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

  private _tolerance = 10.0
  public get tolerance() {
    return this._tolerance
  }
  public set tolerance(value) {
    this._tolerance = value
  }

  /**
   *
   */
  public get rate() {
    if (this.source.geojson == null) {
      return 1.0
    }
    let s = this.getPointCount(this.source.geojson)
    let d = this.getPointCount(this.displaySource.geojson)
    return 1.0 - d / s
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
    this.rateChange.emit()
  }

  /**
   *
   * @param geojson
   */
  private getPointCount(geojson) {
    let count = 0
    turf.coordEach(
      geojson,
      (
        currentCoord,
        coordIndex,
        featureIndex,
        multiFeatureIndex,
        geometryIndex,
      ) => {
        count++
      },
    )
    return count
  }

  /**
   *
   */
  public douglasTurf() {
    //TODO 请同学们完成
    if (this.source.geojson == null) {
      return
    }
    const geojson = String2GeoJSON(this.source.geojson_string)
    const options = {
      tolerance: (180.0 * this.tolerance) / (2 * Math.PI * Math.PI * 6378.137),
      highQuality: false,
    }
    this.displaySource.geojson_string = GeoJSON2String(
      turf.simplify(geojson, options),
      true,
    )
    this.rateChange.emit()
  }

  private simplify(coordinates, tolerance) {
    //简化阈值校验
    if (coordinates.length < 4) {
      return coordinates
    }

    const last = coordinates.length - 1
    let simplified = [coordinates[0]]
    if (this.isRing(coordinates, 0, last)) {
      let d = this.getMaxDist(coordinates, 0, last, tolerance)
      this.simplifyDouglasPeucker(
        coordinates,
        0,
        d.index,
        tolerance,
        simplified,
      )
      this.simplifyDouglasPeucker(
        coordinates,
        d.index,
        last,
        tolerance,
        simplified,
      )
    } else {
      this.simplifyDouglasPeucker(coordinates, 0, last, tolerance, simplified)
    }
    return simplified
  }

  private isRing(coordinates, first, last) {
    //TODO：判断是否为环
    if (
      coordinates[last][0] - coordinates[first][0] < Number.EPSILON &&
      coordinates[last][1] - coordinates[first][1] < Number.EPSILON
    ) {
      return true
    }
    return false
  }

  private simplifyDouglasPeucker(
    coordinates,
    first,
    last,
    tolerance,
    simplified,
  ) {
    if (last - first < 2) {
      simplified.push(coordinates[last])
      return
    }

    let d = this.getMaxDist(coordinates, first, last, tolerance)

    if (d.maxDist <= tolerance) {
      simplified.push(coordinates[last])
      return
    } else {
      this.simplifyDouglasPeucker(
        coordinates,
        first,
        d.index,
        tolerance,
        simplified,
      )
      this.simplifyDouglasPeucker(
        coordinates,
        d.index,
        last,
        tolerance,
        simplified,
      )
    }
  }

  /**
   *
   */
  public douglas() {
    //TODO 请同学们完成
    if (this.source.geojson == null) {
      return
    }
    const geojson = String2GeoJSON(this.source.geojson_string)
    const tolerance =
      (180.0 * this.tolerance) / (2 * Math.PI * Math.PI * 6378.137)
    turf.geomEach(
      geojson,
      function (geom) {
        this.simplifyGeom(geom, tolerance)
      }.bind(this),
    )

    this.displaySource.geojson_string = GeoJSON2String(geojson, true)
    this.rateChange.emit()
  }

  private simplifyGeom(geometry, tolerance) {
    const type = geometry.type

    if (type === 'Point' || type === 'MultiPoint') return geometry

    turf.cleanCoords(geometry, { mutate: true })

    const coordinates = geometry.coordinates
    switch (type) {
      case 'LineString':
        geometry['coordinates'] = this.simplifyLine(coordinates, tolerance)
        break
      case 'MultiLineString':
        geometry['coordinates'] = coordinates.map(
          function (lines) {
            return this.simplifyLine(lines, tolerance)
          }.bind(this),
        )
        break
      case 'Polygon':
        geometry['coordinates'] = this.simplifyPolygon(coordinates, tolerance)
        break
      case 'MultiPolygon':
        geometry['coordinates'] = coordinates.map(
          function (rings) {
            return this.simplifyPolygon(rings, tolerance)
          }.bind(this),
        )
        break
    }
    return geometry
  }

  private simplifyLine(coordinates, tolerance) {
    return coordinates.map(
      function (line) {
        let points = line.map(function (coord) {
          return [coord[0], coord[1]]
        })

        let simpleLine = this.simplify(points, tolerance)
        return simpleLine
      }.bind(this),
    )
  }

  private simplifyPolygon(coordinates, tolerance) {
    return coordinates.map(
      function (ring) {
        let points = ring.map(function (coord) {
          return [coord[0], coord[1]]
        })

        let simpleRing = this.simplify(points, tolerance)
        return simpleRing
      }.bind(this),
    )
  }

  /**
   *
   * @param points
   * @param first
   * @param last
   * @param tolerance
   */
  private getMaxDist(points, first, last, tolerance) {
    //TODO 请同学们完成
    let maxDist = tolerance
    let index
    for (var i = first + 1; i < last; i++) {
      let dist = this.getSegDist(points[i], points[first], points[last])
      if (dist > maxDist) {
        index = i
        maxDist = dist
      }
    }
    return { maxDist: maxDist, index: index }
  }

  /**
   * distance from a point to a segment
   * @param p
   * @param p1
   * @param p2
   * @returns
   */
  private getSegDist(p, p1, p2) {
    //TODO 请同学们完成
    let x = p1[0]
    let y = p1[1]
    let dx = p2[0] - x
    let dy = p2[1] - y

    if (dx !== 0 || dy !== 0) {
      let t = ((p[0] - x) * dx + (p[1] - y) * dy) / (dx * dx + dy * dy)

      if (t > 1) {
        x = p2[0]
        y = p2[1]
      } else if (t > 0) {
        x += dx * t
        y += dy * t
      }
    }

    dx = p[0] - x
    dy = p[1] - y

    return Math.sqrt(dx * dx + dy * dy)
  }
}
