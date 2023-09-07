import TileLayer from 'ol/layer/Tile';
import TDTSourceFactory from '../source/tdt-source-factory';

export default {
  tdt_vec_w_layer: (token: string) => {
    return new TileLayer({
      source: TDTSourceFactory.tdt_vec_w_source(token),
    });
  },
  tdt_cva_w_layer: (token: string) => {
    return new TileLayer({
      source: TDTSourceFactory.tdt_cva_w_source(token),
    });
  },
  tdt_eva_w_layer: (token: string) => {
    return new TileLayer({
      source: TDTSourceFactory.tdt_eva_w_source(token),
    });
  },
  tdt_vec_c_layer: (token: string) => {
    return new TileLayer({
      source: TDTSourceFactory.tdt_vec_c_source(token),
    });
  },
  tdt_cva_c_layer: (token: string) => {
    return new TileLayer({
      source: TDTSourceFactory.tdt_cva_c_source(token),
    });
  },
  tdt_eva_c_layer: (token: string) => {
    return new TileLayer({
      source: TDTSourceFactory.tdt_eva_c_source(token),
    });
  },
  tdt_img_w_layer: (token: string) => {
    return new TileLayer({
      source: TDTSourceFactory.tdt_img_w_source(token),
    });
  },
  tdt_cia_w_layer: (token: string) => {
    return new TileLayer({
      source: TDTSourceFactory.tdt_cia_w_source(token),
    });
  },
  tdt_eia_w_layer: (token: string) => {
    return new TileLayer({
      source: TDTSourceFactory.tdt_eia_w_source(token),
    });
  },
  tdt_img_c_layer: (token: string) => {
    return new TileLayer({
      source: TDTSourceFactory.tdt_img_c_source(token),
    });
  },
  tdt_cia_c_layer: (token: string) => {
    return new TileLayer({
      source: TDTSourceFactory.tdt_cia_c_source(token),
    });
  },
  tdt_eia_c_layer: (token: string) => {
    return new TileLayer({
      source: TDTSourceFactory.tdt_eia_c_source(token),
    });
  },
}
