import { Component, OnInit } from '@angular/core';

import 'codemirror/lib/codemirror';
import 'codemirror/mode/javascript/javascript';

import { HelloGeoJsonService } from '../hello-geo-json.service';

@Component({
  selector: 't105-geojson',
  templateUrl: './geojson.component.html',
  styleUrls: ['./geojson.component.scss']
})
export class GeoJsonComponent implements OnInit {

  public get code() {
    return this.service.code;
  };
  public set code(value) {
    this.service.code = value;
  }

  constructor(
    private service: HelloGeoJsonService
  ) { }

  ngOnInit(): void { }

}
