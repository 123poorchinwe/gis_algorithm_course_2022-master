import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HelloCanvasService } from '../T102-hello-canvas/hello-canvas.service';

@Component({
  selector: 't103-hello-mouse',
  templateUrl: './hello-mouse.component.html',
  styleUrls: ['./hello-mouse.component.scss']
})
export class HelloMouseComponent implements OnInit, AfterViewInit, OnDestroy {

  public title = environment.t103_hello_mouse.title;

  private _action: string = 'SelectTool';
  public get action() {
    return this._action;
  };
  public set action(value) {
    this._action = value;
  }

  constructor(private service: HelloCanvasService) {
    this.action = 'SelectTool';
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
  }

}
