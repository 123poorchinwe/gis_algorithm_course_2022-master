import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 't222-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.scss']
})
export class CorrelationComponent implements OnInit {

  public title = environment.t222_correlation.title;

  constructor() { }

  ngOnInit(): void {
  }

}
