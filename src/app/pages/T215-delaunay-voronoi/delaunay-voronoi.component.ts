import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 't215-delaunay-voronoi',
  templateUrl: './delaunay-voronoi.component.html',
  styleUrls: ['./delaunay-voronoi.component.scss']
})
export class DelaunayVoronoiComponent implements OnInit {

  public title = environment.t215_delanuany_voronoi.title;

  constructor() { }

  ngOnInit(): void {
  }

}
