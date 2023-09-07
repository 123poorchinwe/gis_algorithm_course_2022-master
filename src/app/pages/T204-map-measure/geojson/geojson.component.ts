import { Component, OnInit } from '@angular/core'
import { MapMeasureService } from '../map-measure.service'
@Component({
  selector: 't204-geojson',
  templateUrl: './geojson.component.html',
  styleUrls: ['./geojson.component.scss'],
})
export class GeoJsonComponent implements OnInit {
  /**
   *
   */
  public get code() {
    //TODO: 请同学们实现
    return this.service.source.geojson_string
  }
  public set code(value) {
    //TODO: 请同学们实现
    this.service.source.geojson_string = value
  }

  constructor(private service: MapMeasureService) {}

  ngOnInit(): void {}
}
