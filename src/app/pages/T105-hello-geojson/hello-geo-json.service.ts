import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { MapComponent } from './map/map.component';

@Injectable({
  providedIn: 'root'
})
export class HelloGeoJsonService {
  /**
   * 地图组件
   */
  private _map: MapComponent;
  public get map() {
    return this._map;
  }
  public set map(value) {
    this._map = value;
  }

  private _code;
  public get code() {
    if ((this._code == null) || (this._code == undefined)) {
      this._code = '';
    }
    return this._code;
  }
  public set code(value) {
    this._code = value;
    try {
      this.geojson = JSON.parse(value);
    }
    catch {
      this.geojson = undefined;
    }
  }

  private _geojson;
  public get geojson() {
    return this._geojson;
  }
  public set geojson(value) {
    this._geojson = value;
    this.extractProperties(value);
  }

  private _features = {
    dictionary: [], //属性字段列表
    geometry: [],   //几何对象列表
    properties: [], //属性记录列表
  }
  public get features() {
    return this._features;
  }

  private extractProperties(geojson) {
    //TODO: 按照表格要求，实现对geojson对象信息的提取，请同学实现
    this._features.dictionary = [];
    this._features.properties = [];
    this._features.geometry = [];
    if (geojson != undefined) {
      if (geojson.type === 'FeatureCollection') {
        this._features.dictionary.push('sid');
        for (let i = 0; i < geojson.features.length; i++) {
          const feature = geojson.features[i];
          this._features.geometry.push(feature.geometry)
          if (feature.properties === undefined) {
            feature.properties = {};
          }
          if (feature.properties['sid'] === undefined) {
            feature.properties['sid'] = i;
          }
          this._features.properties.push(feature.properties);
          const keys = Object.getOwnPropertyNames(feature.properties);
          keys.forEach((key) => {
            if (this._features.dictionary.indexOf(key) == -1) {
              this._features.dictionary.push(key);
            }
          });
        }
      }
    }
  }

  /**
   *
   */
  constructor() {
    this._code = '';
  }

  /**
   *
   * @returns
   */
  public createFileName() {
    return uuidv4() + '.json';
  }

  /**
   *
   * @param file
   */
  public openFile(file: File) {
    //TODO: 如何读取geojson文件？请同学们实现
    const reader = new FileReader();
    reader.onload = (event) => {
      this.code = event.target.result;
    };
    reader.readAsText(file, 'utf-8');
  }

  /**
   *
   */
  public saveFile(filename) {
    //TODO: 如何保存geojson文件？请同学们实现
    const a = document.createElement('a');
    a.href = 'data:application/json;charset=utf-8,\ufeff' + encodeURIComponent(this.code);
    a.download = filename;
    a.click();
  }

  /**
   *
   * @param sid
   */
  public location(sid) {
    // console.log(index);
    this.map.locationFeature(sid);
  }
}