import { Component, OnInit } from '@angular/core';
import { MyNameService } from '../my-name.service';

@Component({
  selector: 't201-geojson',
  templateUrl: './geojson.component.html',
  styleUrls: ['./geojson.component.scss']
})
export class GeoJsonComponent implements OnInit {

  /**
   *
   */
  public get code() {
    return this.service.source.geojson_string;
  };
  public set code(value) {
    this.service.source.geojson_string = value;
  }

  constructor(private service: MyNameService) { }

  ngOnInit(): void {
  }

}
