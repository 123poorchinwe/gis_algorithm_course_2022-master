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
export class MapMeasureService {
  /**
   * feature 定位事件
   */
  locationFeature: EventEmitter<any> = new EventEmitter()

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

  public MapMeasureByTurf() {
    if (this.source.geojson == null) {
      return
    }
    const geojson = String2GeoJSON(this.source.geojson_string)
    if (geojson.type == 'FeatureCollection') {
      geojson.features.forEach((feature) => {
        const featurearea = turf.area(feature)
        feature.properties.area1 = featurearea
      })
      this.source.geojson_string = GeoJSON2String(geojson, true)
    }
  }

  public pingmianarea()
   {
    if (this.source.geojson == null) {
      return
    }
    const geojson = String2GeoJSON(this.source.geojson_string)
    if (geojson.type == 'FeatureCollection') {
      geojson.features.forEach((feature) => {
        const coords = turf.coordAll(feature)
        const n = coords.length
        var featurearea = 0
        //TODO:
        for (let i = 0; i < n; i++) {
          featurearea =
            featurearea +
            (coords[i][0] * coords[(i + 1) % n][1] -
              coords[(i + 1) % n][0] * coords[i][1])
        }
       feature.properties.area2 = featurearea / 2
       //return featurearea / 2
      })
    this.source.geojson_string = GeoJSON2String(geojson, true)
   
    }
  }
  public spherearea() 
  {
    if (this.source.geojson == null) {
      return
    }
    const geojson = String2GeoJSON(this.source.geojson_string)
    if (geojson.type == 'FeatureCollection') {
      geojson.features.forEach((feature) => {
        const coords = turf.coordAll(feature)
        const n = coords.length
        var featurearea = 0
        //TODO:
        for (let i = 0; i < n; i++) {
          featurearea =
            featurearea +
            (coords[i][0] * coords[(i + 1) % n][1] -
              coords[(i + 1) % n][0] * coords[i][1])
        }
       feature.properties.area2 = featurearea /3.14
       //return featurearea / 2
      })
    this.source.geojson_string = GeoJSON2String(geojson, true)
   
    }
  }
  private geometrybysphere(geometry) {
    switch(geometry.type){
      case 'Mutipolygon':
        return this.multiPolygonAreaBySphere(geometry.coordAll);
      case 'Ploygon':
        return this.PolygonAreaBySphere(geometry.coordAll);
      default:
        return 0
    }
  }
  PolygonAreaBySphere(coordAll: any) {
    throw new Error('Method not implemented.')
  }
  multiPolygonAreaBySphere(coordinate) {
    let area =0;
    
   
  }
  public trapezoidArea(lon1,lon2,lat1,lat2){
    //WGS84椭球
    const a=6378137.0;
    const f=1/298.257223563;
    const b=a-a*f;
    const e2=(a*a-b*b)/(a*a);
    const A=1+e2/2.0+3*e2*e2/8+5*e2*e2*e2/16;
    const B=e2/6+3*e2*e2/16+ 3*e2*e2*e2/16;
    const C=3*e2*e2/80+e2*e2*e2/16;
    const D=e2*e2*e2/112;
    const K=2*a*a*(1-e2)*(lon2-lon1);
    const dlat=lat2-lat1;
    const mlat=0.5*(lat1+lat2)
    const T=K*(A*Math.sin(0.5*dlat)*Math.cos(mlat)
    -B*Math.sin(0.5*dlat)*Math.cos(mlat)
    +C*Math.sin(0.5*dlat)*Math.cos(mlat)
    -D**Math.sin(0.5*dlat)*Math.cos(mlat)
   
    ) 
    return T;
  }
}
