import { Tool } from 'src/app/lib/tools/tool';
import { NoneTool } from 'src/app/lib/tools/none-tool';
import { CreateToolFactory } from 'src/app/lib/tools/create-tool-factory';

export class CanvasLayerService {
  /**
   *
   */
  private options = {
    strokeStyle: 'rgba(0,128,0,1)',
    fillStyle: 'rgba(0,128,0,0.5)',
  }

  /**
   * 获取和设置canvas
   */
  private _canvas = null;
  public get canvas() {
    return this._canvas;
  }
  private set canvas(value) {
    this._canvas = value;
    if ((value != undefined) || (value != null)) {
      this._canvas.addEventListener("mousedown", (event) => {
        // console.log("mousedown");
        this.actionTool.onmousedown(event);
      });
      this._canvas.addEventListener("mousemove", (event) => {
        // console.log("mousemove");
        this.actionTool.onmousemove(event);
      });
      // this._canvas.addEventListener("mouseup", (event) => {
      //   console.log("mouseup");
      //   this.actionTool.onmouseup(event);
      // });
    }
  }

  /**
   * 当前绘制活动
   */
  private _action = 'NoneTool';
  public get action() {
    return this._action;
  }
  public set action(value) {
    this._action = value;
    const f = CreateToolFactory[value];
    this.actionTool = f(this.canvas, this.options);
    // this.actionTool = f(this.canvas);
  }
  /**
   * 当前绘制活动Tool
   */
  private _actionTool: Tool = null;
  // 绘制活动状态属性
  public get actionTool() {
    if ((this._actionTool === undefined) || (this._actionTool === null)) {
      this._actionTool = new NoneTool(this.canvas);
    }
    return this._actionTool;
  }
  private set actionTool(value) {
    this._actionTool = value;
  }

  /**
   *
   * @param canvas 构造函数
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

}
