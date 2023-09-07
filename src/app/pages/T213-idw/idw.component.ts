import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 't213-idw',
  templateUrl: './idw.component.html',
  styleUrls: ['./idw.component.scss']
})
export class IDWComponent implements OnInit {

  public title = environment.t213_idw.title;

  constructor() { }

  ngOnInit(): void {
  }

}
