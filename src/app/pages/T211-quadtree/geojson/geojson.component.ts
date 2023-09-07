import { Component, OnInit } from '@angular/core';
import { QuadTreeService } from '../quad-tree.service';

@Component({
  selector: 't211-geojson',
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

  constructor(private service: QuadTreeService) { }

  ngOnInit(): void {
  }

}
