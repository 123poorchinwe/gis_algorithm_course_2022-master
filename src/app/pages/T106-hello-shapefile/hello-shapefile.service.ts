import { Injectable } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

import * as shapefile from 'shapefile';
import beautify from 'js-beautify';

@Injectable({
  providedIn: 'root'
})
export class HelloShapefileService {

  private _code;
  public get code() {
    if ((this._code == null) || (this._code == undefined)) {
      this._code = '';
    }
    return this._code;
  }
  public set code(value) {
    this._code = value;
    this.geojson = JSON.parse(value);
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

  private extractProperties(value) {
    //TODO: 按照表格要求，实现对geojson对象信息的提取，请同学实现
    this._features.dictionary = [];
    this._features.properties = [];
    this._features.geometry = [];
    if (value.type === 'FeatureCollection') {
      for (let i = 0; i < value.features.length; i++) {
        const feature = value.features[i];
        this._features.geometry.push(feature.geometry)
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
  public openShapefile(shp: File, dbf?: File) {
    //TODO: 如何基于异步打开多个文件？请同学们实现
    //TODO: 如何读取shp和dbf文件？请同学们实现
    let shpbuf = undefined;
    let dbfbuf = undefined;

    if (shp == undefined) return;
    // console.log(shp.name);
    const shpreader = new FileReader();
    shpreader.onload = (event) => {
      shpbuf = event.target.result;
      if (dbf == undefined) {
        this.shapefile2geojson(shpbuf);
        return;
      }

      // console.log(dbf.name);
      const dbfreader = new FileReader();
      dbfreader.onload = (event) => {
        dbfbuf = event.target.result;
        this.shapefile2geojson(shpbuf, dbfbuf);
      }
      dbfreader.readAsArrayBuffer(dbf);
    }
    shpreader.readAsArrayBuffer(shp);

  }

  public openGeoJson(file: File) {
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

  private shapefile2geojson(shpbuf, dbfbuf?) {
    //TODO: 如何调取 shapefile 包 实现数据geojson的转换？ 请同学们实现
    //TODO: 如何调取 beautify 包 实现geojson文本格式美化？ 请同学们实现
    shapefile.read(shpbuf, dbfbuf, { encoding: 'utf8' })
      .then((values) => {
        // console.log(values);
        // this.code = JSON.stringify(values, null, 4);
        this.code = beautify(JSON.stringify(values), { keep_array_indentation: true });
      })
      .catch(error => console.error(error.stack));
  }
}