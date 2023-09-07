import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HelloCanvasService } from './hello-canvas.service';

@Component({
  selector: 't102-hello-canvas',
  templateUrl: './hello-canvas.component.html',
  styleUrls: ['./hello-canvas.component.scss']
})
export class HelloCanvasComponent implements OnInit {

  public title = environment.t102_hello_canvas.title;

  constructor(private service: HelloCanvasService) { }

  ngOnInit(): void {
  }

}
