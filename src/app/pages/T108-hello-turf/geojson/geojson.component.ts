import { Component, OnInit } from '@angular/core';
import { HelloTurfService } from '../hello-turf.service';

@Component({
  selector: 't108-geojson',
  templateUrl: './geojson.component.html',
  styleUrls: ['./geojson.component.scss']
})
export class GeoJsonComponent implements OnInit {

  /**
   *
   */
  public get code() {
    return this.service.activeSource.geojson_string;
  };
  public set code(value) {
    this.service.activeSource.geojson_string = value;
  }

  constructor(private service: HelloTurfService) { }

  ngOnInit(): void {
  }

}
