import { Component, OnInit } from '@angular/core';
import { DouglasPeukerService } from '../douglas-peuker.service';

@Component({
  selector: 't208-geojson',
  templateUrl: './geojson.component.html',
  styleUrls: ['./geojson.component.scss']
})
export class GeoJsonComponent implements OnInit {

  /**
   *
   */
  public get code() {
    return this.service.displaySource.geojson_string;
  };
  public set code(value) {
    this.service.displaySource.geojson_string = value;
  }

  constructor(private service: DouglasPeukerService) { }

  ngOnInit(): void {
  }

}
