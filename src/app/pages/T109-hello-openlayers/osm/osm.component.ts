import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 't109-osm',
  templateUrl: './osm.component.html',
  styleUrls: ['./osm.component.scss']
})
export class OsmComponent implements OnInit {

  private map: Map | undefined;

  private osmLayer: TileLayer<OSM>;

  constructor() {
    this.osmLayer = new TileLayer({
      source: new OSM()
    });
  }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap() {
    //TODO: 地图初始化，OSM图层加载，请同学实现
    this.map = new Map({
      target: 't109-osm-ol-map',
      layers: [
        this.osmLayer
      ],
      view: new View({
        // center: fromLonLat([0, 0]),
        center: fromLonLat([150, 0]),
        zoom: 1,
      })
    });

  }
}
