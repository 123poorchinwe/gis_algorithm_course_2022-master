import TDTSourceName from '../source/tdt-source-name';
import TDT from '../source/tdt';

export default {
  tdt_vec_w_source: (token: string) => {
    return new TDT({
      layername: TDTSourceName.vec_w,
      tk: token,
    });
  },
  tdt_cva_w_source: (token: string) => {
    return new TDT({
      layername: TDTSourceName.cva_w,
      tk: token,
    });
  },
  tdt_eva_w_source: (token: string) => {
    return new TDT({
      layername: TDTSourceName.eva_w,
      tk: token,
    });
  },
  tdt_vec_c_source: (token: string) => {
    return new TDT({
      layername: TDTSourceName.vec_c,
      tk: token,
    });
  },
  tdt_cva_c_source: (token: string) => {
    return new TDT({
      layername: TDTSourceName.cva_c,
      tk: token,
    });
  },
  tdt_eva_c_source: (token: string) => {
    return new TDT({
      layername: TDTSourceName.eva_c,
      tk: token,
    });
  },
  tdt_img_w_source: (token: string) => {
    return new TDT({
      layername: TDTSourceName.img_w,
      tk: token,
    });
  },
  tdt_cia_w_source: (token: string) => {
    return new TDT({
      layername: TDTSourceName.cia_w,
      tk: token,
    });
  },
  tdt_eia_w_source: (token: string) => {
    return new TDT({
      layername: TDTSourceName.eia_w,
      tk: token,
    });
  },
  tdt_img_c_source: (token: string) => {
    return new TDT({
      layername: TDTSourceName.img_c,
      tk: token,
    });
  },
  tdt_cia_c_source: (token: string) => {
    return new TDT({
      layername: TDTSourceName.cia_c,
      tk: token,
    });
  },
  tdt_eia_c_source: (token: string) => {
    return new TDT({
      layername: TDTSourceName.eia_c,
      tk: token,
    });
  },
}
