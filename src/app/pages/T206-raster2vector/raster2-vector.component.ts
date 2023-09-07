import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 't206-raster2-vector',
  templateUrl: './raster2-vector.component.html',
  styleUrls: ['./raster2-vector.component.scss']
})
export class Raster2VectorComponent implements OnInit {

  public title = environment.t206_raster2vector.title;

  constructor() { }

  ngOnInit(): void {
  }

}
