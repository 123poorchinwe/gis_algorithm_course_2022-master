import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 't212-rtree',
  templateUrl: './rtree.component.html',
  styleUrls: ['./rtree.component.scss']
})
export class RTreeComponent implements OnInit {

  public title = environment.t212_rtree.title;

  constructor() { }

  ngOnInit(): void {
  }

}
