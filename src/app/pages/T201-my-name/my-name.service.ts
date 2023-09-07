import { EventEmitter, Injectable } from '@angular/core';
import { GeoJsonSource } from 'src/app/lib/services/geojson-source';
import { v4 as uuidv4 } from 'uuid';
import { MapComponent } from './map/map.component';

@Injectable({
  providedIn: 'root'
})
export class MyNameService {
  /**
   * feature 定位事件
   */
   locationFeature: EventEmitter<any> = new EventEmitter();

   private _source: GeoJsonSource;
   public get source() {
     return this._source;
   }
   public setDisplay(visible: boolean) {
     this._source.maplayer.setVisible(visible);
   }
 
   /**
    *
    */
   constructor() {
     this._source = new GeoJsonSource();
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
     const reader = new FileReader();
     reader.onload = (event) => {
       this.source.geojson_string = event.target.result as string;
     };
     reader.readAsText(file, 'utf-8');
   }

   /**
   *
   */
  public saveFile(filename) {
    this.source.saveFile(filename);
  }

}
