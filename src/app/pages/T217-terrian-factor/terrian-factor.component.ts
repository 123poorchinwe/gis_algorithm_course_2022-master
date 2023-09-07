import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 't217-terrian-factor',
  templateUrl: './terrian-factor.component.html',
  styleUrls: ['./terrian-factor.component.scss']
})
export class TerrianFactorComponent implements OnInit {

  public title = environment.t217_terrian_factor.title;

  constructor() { }

  ngOnInit(): void {
  }

}
