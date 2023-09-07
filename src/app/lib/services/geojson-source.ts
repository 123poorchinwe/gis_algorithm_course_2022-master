import GeoJSON from '@mapbox/geojson-types'
import normalize from '@mapbox/geojson-normalize'
import beautify from 'js-beautify'
import { v4 as uuidv4 } from 'uuid'

import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import * as format from 'ol/format/GeoJSON'

// import Circle from 'ol/geom/Circle';
// import Feature from 'ol/Feature';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'
import { getBottomLeft, getHeight, getWidth } from 'ol/extent'
import { toContext } from 'ol/render'

// GeoJson图层地图样式
const image = new CircleStyle({
  radius: 2,
  fill: new Fill({ color: 'red' }),
  stroke: new Stroke({ color: 'red', width: 1 }),
})

const styles = {
  Point: new Style({
    image: image,
  }),
  LineString: new Style({
    stroke: new Stroke({
      color: 'green',
      width: 1,
    }),
  }),
  MultiLineString: new Style({
    stroke: new Stroke({
      color: 'green',
      width: 1,
    }),
  }),
  MultiPoint: new Style({
    image: image,
  }),
  MultiPolygon: new Style({
    stroke: new Stroke({
      color: 'green',
      width: 1,
    }),
    fill: new Fill({
      color: 'rgba(255, 255, 0, 0.1)',
    }),
  }),
  Polygon: new Style({
    stroke: new Stroke({
      color: 'green',
      lineDash: [4],
      width: 3,
    }),
    fill: new Fill({
      color: 'rgba(255, 255, 0, 0.1)',
    }),
  }),
  GeometryCollection: new Style({
    stroke: new Stroke({
      color: 'magenta',
      width: 2,
    }),
    fill: new Fill({
      color: 'magenta',
    }),
    image: new CircleStyle({
      radius: 10,
      fill: null,
      stroke: new Stroke({
        color: 'magenta',
      }),
    }),
  }),
  Circle: new Style({
    stroke: new Stroke({
      color: 'red',
      width: 2,
    }),
    fill: new Fill({
      color: 'rgba(255,0,0,0.2)',
    }),
  }),
}

const styleFunction = function (feature) {
  return styles[feature.getGeometry().getType()]
}

/**
 * geojson 转 string
 * @param geojson
 * @param pretty
 * @returns
 */
export function GeoJSON2String(
  geojson: GeoJSON,
  pretty: boolean = false,
): string {
  //TODO: 如何将 geojson 对象转为 geojson 字符串，请同学们实现
  if (pretty) {
    return beautify(JSON.stringify(geojson), { keep_array_indentation: true })
  }
  return JSON.stringify(geojson)
}

/** string 转 GeoJSON */
export function String2GeoJSON(json: string): GeoJSON {
  //TODO: 如何将 json 字符串 转为 geojson 对象，请同学们实现
  try {
    return JSON.parse(json) as GeoJSON
  } catch {
    return null
  }
}

/**
 * GeoJson对象服务
 */
export class GeoJsonSource {
  /**
   * 对象唯一标识
   */
  private _oid = uuidv4()
  public get oid() {
    return this._oid
  }

  /**
   * 数据源名称
   */
  private _name: string
  public get name() {
    return this._name
  }
  public set name(value) {
    this._name = value
  }

  /**
   * 构造函数
   */
  public constructor(geojson?: string) {
    this._maplayer = new VectorLayer({
      style: styleFunction,
    })
    this.geojson_string = geojson
  }

  private _geojson_string
  public get geojson_string() {
    if (this._geojson_string == null || this._geojson_string == undefined) {
      this._geojson_string = ''
    }
    return this._geojson_string
  }
  public set geojson_string(value) {
    this._geojson_string = value
    this.fromString(this._geojson_string)
  }

  /**
   * geojson 对象
   */
  private _geojson
  public get geojson() {
    return this._geojson
  }
  private set geojson(value: null | GeoJSON) {
    this._geojson = normalize(value)
    this.extractProperties()
    this.setMapLayerSource()
  }

  /**
   * 特征要素集
   */
  private _features = {
    dictionary: [], //属性字段列表
    geometry: [], //几何对象列表
    properties: [], //属性记录列表
  }
  public get features() {
    return this._features
  }

  /**
   * 地图图层
   */
  private _maplayer
  public get maplayer() {
    return this._maplayer
  }
  /**
   * 矢量数据源
   */
  private _mapsource = null

  /**
   * 基于url获取字符串创建 geojson 对象
   * @param url
   */
  public fromUrl(url: string) {
    //TODO: 如何基于url获取字符串创建 geojson 对象， 请同学们实现
    const xhr = new XMLHttpRequest()
    xhr.onload = () => {
      this.geojson_string = xhr.response as string
    }
    xhr.timeout = 0
    xhr.open('GET', url, true)
    xhr.responseType = 'text'
    xhr.send()
  }

  /**
   * geojson 字符串转 geojson 对象
   * @param json
   */
  private fromString(json: string) {
    //TODO: 如何将 json 字符串 转为 geojson 对象，请同学们实现
    try {
      this.geojson = JSON.parse(json) as GeoJSON
    } catch {
      this.geojson = null
    }
  }

  /**
   * geojson 对象 转 geojson 字符串
   * @param pretty
   * @returns
   */
  public toString(pretty: boolean = false): string {
    //TODO: 如何将 geojson 对象转为 geojson 字符串，请同学们实现
    if (pretty) {
      return beautify(JSON.stringify(this.geojson), {
        keep_array_indentation: true,
      })
    }
    return JSON.stringify(this.geojson)
  }

  /**
   * 打开文件
   * @param file
   */
  public openFile(file: File) {
    //TODO: 如何读取geojson文件？请同学们实现
    const reader = new FileReader()
    reader.onload = (event) => {
      this.geojson_string = event.target.result as string
    }
    reader.readAsText(file, 'utf-8')
  }

  /**
   * 保存文件
   */
  public saveFile(filename, pretty: boolean = true) {
    //TODO: 如何保存geojson文件？请同学们实现
    const a = document.createElement('a')
    a.href =
      'data:application/json;charset=utf-8,\ufeff' +
      encodeURIComponent(this.toString(pretty))
    a.download = filename
    a.click()
  }

  /**
   * 定位要素
   * @param sid
   */
  public getFeatureBySid(sid) {
    //TODO: 根据sid查找要素的几何属性，请同学们实现
    if (this.geojson == null || sid < 0) {
      return null
    }

    let geo = null
    const features = this._mapsource.getFeatures()
    features.forEach((feature) => {
      const id = feature.getProperties()['sid']
      if (id == sid) {
        geo = feature.getGeometry()
      }
    })
    return geo
  }
  // public getFeatureBySid(sid) {
  //   if (this.geojson == null || sid < 0) {
  //     return null
  //   }

  //   let feature = null
  //   const features = this._mapsource.getFeatures()
  //   features.forEach((f) => {
  //     const id = f.getProperties()['sid']
  //     if (id == sid) {
  //       feature = f
  //     }
  //   })
  //   return feature
  // }

  /**
   * 提取特征数据
   */
  private extractProperties() {
    //TODO: 按照表格要求，实现对geojson对象信息的提取，请同学实现
    this._features.dictionary = []
    this._features.properties = []
    this._features.geometry = []
    if (this._geojson != null) {
      if (this._geojson.type === 'FeatureCollection') {
        this._features.dictionary.push('sid')
        for (let i = 0; i < this._geojson.features.length; i++) {
          const feature = this._geojson.features[i]
          this._features.geometry.push(feature.geometry)
          if (feature.properties === undefined) {
            feature.properties = {}
          }
          if (feature.properties['sid'] === undefined) {
            feature.properties['sid'] = i
          }
          this._features.properties.push(feature.properties)
          const keys = Object.getOwnPropertyNames(feature.properties)
          keys.forEach((key) => {
            if (this._features.dictionary.indexOf(key) == -1) {
              this._features.dictionary.push(key)
            }
          })
        }
      }
    }
  }

  /**
   * 设置地图图层数据源
   */
  private setMapLayerSource() {
    //TODO: 设置矢量图层的数据源，实现数据源更新，请同学实现
    this._maplayer.setSource(null)
    if (this._geojson != null) {
      this._mapsource = new VectorSource({
        // import * as format from 'ol/format/GeoJSON';
        features: new format.default().readFeatures(this._geojson),
      })
      this._maplayer.setSource(this._mapsource)
    }
  }

  //判断是否设置地图图片
  private post
  public get Post() {
    return this.post
  }
  public set Post(value: boolean) {
    this.post = value
    this.setMapLayerStyle()
  }
  private setMapLayerStyle() {
    if (!this.post) {
      this._maplayer.setStyle(styleFunction)
      return
    }
    this._maplayer.setStyle(null)
    const fill = new Fill()
    const stroke = new Stroke({
      color: 'white',
      width: 2,
    })
    this.setImageSrc()
    const style = new Style({
      renderer: function (pixelCoordinates, state) {
        const context = state.context
        const geometry = state.geometry
        geometry.setCoordinates(pixelCoordinates)
        const extent = geometry.getExtent()
        const width = getWidth(extent)
        const height = getHeight(extent)
        const flag = state.feature.get('flag')
        if (!flag || width < 1 || height < 1) {
          return
        }

        // Stitch out country shape from the blue canvas
        context.save()
        const renderContext = toContext(context, {
          pixelRatio: 1,
        })
        renderContext.setFillStrokeStyle(fill, stroke)
        renderContext.drawGeometry(geometry)
        context.clip()
        // Fill transparent country with the flag image
        const bottomLeft = getBottomLeft(extent)
        const left = bottomLeft[0]
        const bottom = bottomLeft[1]
        context.drawImage(flag, left, bottom, width, height)
        context.restore()
      },
    })
    this._maplayer.setStyle(style)
  }

  public setImageSrc() {
    let geojson = String2GeoJSON(this.geojson_string)
    geojson.features.forEach((feature) => {
      const img = new Image()
      img.src = 'https://i.postimg.cc/' + feature.properties.iso + '.jpg'
      feature.properties['flag'] = img
    })
    this._mapsource = new VectorSource({
      features: new format.default().readFeatures(geojson),
    })
    this._maplayer.setSource(this._mapsource)
  }
}
