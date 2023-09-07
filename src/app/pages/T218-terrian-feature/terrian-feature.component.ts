import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 't218-terrian-feature',
  templateUrl: './terrian-feature.component.html',
  styleUrls: ['./terrian-feature.component.scss']
})
export class TerrianFeatureComponent implements OnInit {

  public title = environment.t218_terrian_feature.title;

  constructor() { }

  ngOnInit(): void {
  }

}
