/**
 * @module ol/source/TDT
 */

import XYZ from 'ol/source/XYZ';
import TDTSourceName from './tdt-source-name';
import { get as getProjection } from 'ol/proj';

/**
 * The attribution containing a link to the TianDiTu Copyright and License
 * page.
 * @const
 * @type {string}
 * @api
 */
export const ATTRIBUTION = 'Tiles © <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a>';

/**
 * 天地图 URL
 */
export const TdtUrls = {
  vec_w: 'https://t{0-7}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
  cva_w: 'https://t{0-7}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
  eva_w: 'https://t{0-7}.tianditu.gov.cn/eva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
  vec_c: 'https://t{0-7}.tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
  cva_c: 'https://t{0-7}.tianditu.gov.cn/cva_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
  eva_c: 'https://t{0-7}.tianditu.gov.cn/eva_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
  img_w: 'https://t{0-7}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
  cia_w: 'https://t{0-7}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
  eia_w: 'https://t{0-7}.tianditu.gov.cn/eia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
  img_c: 'https://t{0-7}.tianditu.gov.cn/img_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
  cia_c: 'https://t{0-7}.tianditu.gov.cn/cia_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
  eia_c: 'https://t{0-7}.tianditu.gov.cn/eia_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
};

/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {number} [cacheSize] Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.
 * @property {null|string} [crossOrigin='anonymous'] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {boolean} [imageSmoothing=true] Enable image smoothing.
 * @property {number} [maxZoom=19] Max zoom.
 * @property {boolean} [opaque=true] Whether the layer is opaque.
 * @property {number} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {import("../Tile.js").LoadFunction} [tileLoadFunction] Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @property {number} [transition=250] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 * @property {import("./TDTLayerName.js").default} [layername] layername.
 * @property {string} [tk] 密钥
 * Must include `{x}`, `{y}` or `{-y}`, and `{z}` placeholders.
 * @property {boolean} [wrapX=true] Whether to wrap the world horizontally.
 */

/**
 * @classdesc
 * Layer source for the OpenStreetMap tile server.
 * @api
 */
class TDT extends XYZ {
  /**
   * @param {Options=} [opt_options] Open Street Map options.
   */
  constructor(opt_options) {
    const options = opt_options || {};

    let attributions;
    if (options.attributions !== undefined) {
      attributions = options.attributions;
    } else {
      attributions = [ATTRIBUTION];
    }

    const crossOrigin = options.crossOrigin !== undefined ? options.crossOrigin : 'anonymous';

    const layername = options.layername !== undefined ? options.layername : TDTSourceName.vec_c;
    const projection = getSourceProjection(layername);
    const url = getSourceUrl(layername, options.tk);

    super({
      attributions: attributions,
      attributionsCollapsible: false,
      cacheSize: options.cacheSize,
      crossOrigin: crossOrigin,
      imageSmoothing: options.imageSmoothing,
      maxZoom: options.maxZoom !== undefined ? options.maxZoom : 19,
      // opaque: options.opaque !== undefined ? options.opaque : true,
      reprojectionErrorThreshold: options.reprojectionErrorThreshold,
      tileLoadFunction: options.tileLoadFunction,
      transition: options.transition,
      url: url,
      projection: projection, // 地图投影信息
      wrapX: options.wrapX,
    });
  }
}

/**
 * 获取Urls信息
 * @private
 * @param {*} sourcename
 * @param {*} tk
 */
function getSourceUrl(sourcename: number, tk: string) {
  let url;
  switch (sourcename) {
    case TDTSourceName.cia_c:
      url = TdtUrls.cia_c;
      break;
    case TDTSourceName.cia_w:
      url = TdtUrls.cia_w;
      break;
    case TDTSourceName.cva_c:
      url = TdtUrls.cva_c;
      break;
    case TDTSourceName.cva_w:
      url = TdtUrls.cva_w;
      break;
    case TDTSourceName.eia_c:
      url = TdtUrls.eia_c;
      break;
    case TDTSourceName.eia_w:
      url = TdtUrls.eia_w;
      break;
    case TDTSourceName.eva_c:
      url = TdtUrls.eva_c;
      break;
    case TDTSourceName.eva_w:
      url = TdtUrls.eva_w;
      break;
    case TDTSourceName.img_c:
      url = TdtUrls.img_c;
      break;
    case TDTSourceName.img_w:
      url = TdtUrls.img_w;
      break;
    case TDTSourceName.vec_c:
      url = TdtUrls.vec_c;
      break;
    case TDTSourceName.vec_w:
      url = TdtUrls.vec_w;
      break;
  }
  return url + '&tk=' + tk;
}

/**
 * 获取图层投影信息
 * @private
 * @param {import("./TDTLayerName.js").default} layername
 */
function getSourceProjection(layername: number) {
  if (layername & 0b1) {
    return getProjection('EPSG:3857');
  } else {
    return getProjection('EPSG:4326');
  }
}

export default TDT;
