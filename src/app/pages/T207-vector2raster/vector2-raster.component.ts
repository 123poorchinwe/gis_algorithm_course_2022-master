import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 't207-vector2-raster',
  templateUrl: './vector2-raster.component.html',
  styleUrls: ['./vector2-raster.component.scss']
})
export class Vector2RasterComponent implements OnInit {

  public title = environment.t207_vector2raster.title;

  constructor() { }

  ngOnInit(): void {
  }

}
