import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 't209-smooth',
  templateUrl: './smooth.component.html',
  styleUrls: ['./smooth.component.scss']
})
export class SmoothComponent implements OnInit {

  public title = environment.t209_smooth.title;

  constructor() { }

  ngOnInit(): void {
  }

}
