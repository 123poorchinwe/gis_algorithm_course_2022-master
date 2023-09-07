import { Component, OnInit } from '@angular/core';

import 'codemirror/lib/codemirror';
import 'codemirror/mode/javascript/javascript';

import { HelloShapefileService } from '../hello-shapefile.service';


@Component({
  selector: 't106-geojson-table',
  templateUrl: './geojson-table.component.html',
  styleUrls: ['./geojson-table.component.scss']
})
export class GeoJsonTableComponent implements OnInit {

  public get code() {
    return this.service.code;
  };
  public set code(value) {
    this.service.code = value;
  }

  constructor(
    private service: HelloShapefileService
  ) { }

  ngOnInit(): void { }

}
