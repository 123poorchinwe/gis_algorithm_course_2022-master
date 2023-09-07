import { AfterViewInit, Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { CanvasLayerService } from './canvas-layer.service';

@Component({
  selector: 't103-canvas-layer',
  templateUrl: './canvas-layer.component.html',
  styleUrls: ['./canvas-layer.component.scss']
})
export class CanvasLayerComponent implements OnInit, AfterViewInit, OnDestroy {

  private canvasEl: HTMLCanvasElement;
  private width;
  private height;

  private _action;
  /**
   *
   */
  @Input()
  public get action() {
    return this._action;
    // return this.service.action;
  }
  public set action(value) {
    this._action = value;
    if (this.service != undefined) {
      this.service.action = value;
    }
  }

  private service: CanvasLayerService = undefined;

  /**
   *
   */
  constructor() { }

  // 获取窗口变化
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.reset();
  }

  ngOnInit(): void { }

  /**
   *
   */
  ngAfterViewInit(): void {
    this.canvasEl = document.getElementById("t103-canvas-layer") as HTMLCanvasElement;
    this.reset();

    this.service = new CanvasLayerService(this.canvasEl);
    this.service.action = this._action;

    // 阻止右键事件
    this.canvasEl.oncontextmenu = (e) => {
      let e1 = e || window.event;
      e1.preventDefault();
    }
  }

  ngOnDestroy(): void {

  }

  private reset() {
    // 重新设置参数
    this.width = this.canvasEl.clientWidth;
    this.height = this.canvasEl.clientHeight;
    this.canvasEl.width = this.width;
    this.canvasEl.height = this.height;
  }
}
