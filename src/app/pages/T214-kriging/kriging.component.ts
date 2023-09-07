import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 't214-kriging',
  templateUrl: './kriging.component.html',
  styleUrls: ['./kriging.component.scss']
})
export class KrigingComponent implements OnInit {

  public title = environment.t214_kriging.title;

  constructor() { }

  ngOnInit(): void {
  }

}
