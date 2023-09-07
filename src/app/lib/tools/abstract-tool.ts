import { Tool } from "./tool";

export abstract class AbstractTool implements Tool {
  /**
   *
   */
  private _drawingSurface;
  /**
   *
   */
  private _canvas: HTMLCanvasElement;
  /**
   *
   * @param canvas
   */
  constructor(canvas: HTMLCanvasElement, options?: {}) {
    this._canvas = canvas;
    this.ctx = this._canvas.getContext('2d');
    // 选项参数合并
    this.optionsMerge(options);

    this._drawingSurface = null;
  }

  /**
   *
   */
  protected ctx: CanvasRenderingContext2D
  /**
   * 选项参数
   */
  protected options = {
    lineWidth: 1,
    strokeStyle: 'rgba(128,0,0,1)',
    fillStyle: 'rgba(128,0,0,0.5)',
  }
  /**
   * 选项参数合并
   * @param opts
   */
  private optionsMerge(opts?: {}) {
    for (let attr in opts) {
      this.options[attr] = opts[attr];
    }
  }
  /**
   * 用于保存鼠标按下时的canvas坐标
   */
  protected mouseDown = null;
  protected mouseMove = null;
  protected mouseUp = null;

  // 将浏览器客户区坐标转换为canvas坐标
  protected windowToCanvas(clientX, clientY) {
    let bbox = this._canvas.getBoundingClientRect();
    return {
      x: (clientX - bbox.left) / (this._canvas.width / bbox.width),
      y: (clientY - bbox.top) / (this._canvas.height / bbox.height),
    };
  }

  // 保存canvas绘图表面
  protected saveDrawingSurface() {
    this._drawingSurface = this.ctx.getImageData(
      0,
      0,
      this._canvas.width,
      this._canvas.height
    );
  }

  // 恢复canvas绘图表面
  protected restoreDrawingSurface() {
    this.ctx.putImageData(this._drawingSurface, 0, 0);
  }

  // 清除画布
  protected clearCanvas() {
    this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  /**
   * 在用户按下按键时触发。
   * @param event
   */
  onkeydown(event: KeyboardEvent) { }
  /**
   * 在用户敲击按钮时触发。
   * @param event
   */
  onkeypress(event: KeyboardEvent) { }
  /**
   * 当用户释放按键时触发。
   * @param event
   */
  onkeyup(event: KeyboardEvent) { }
  /**
   * 元素上发生鼠标点击时触发。
   * @param event
   */
  onclick(event: MouseEvent) { }
  /**
   * 元素上发生鼠标双击时触发。
   * @param event
   */
  ondblclick(event: MouseEvent) { }
  /**
   * 元素被拖动时运行的脚本。
   * @param event
   */
  ondrag(event: DragEvent) { }
  /**
   * 在拖动操作末端运行的脚本。
   * @param event
   */
  ondragend(event: DragEvent) { }
  /**
   * 当元素元素已被拖动到有效拖放区域时运行的脚本。
   * @param event
   */
  ondragenter(event: DragEvent) { }
  /**
   * 当元素离开有效拖放目标时运行的脚本。
   * @param event
   */
  ondragleave(event: DragEvent) { }
  /**
   * 当元素在有效拖放目标上正在被拖动时运行的脚本。
   * @param event
   */
  ondragover(event: DragEvent) { }
  /**
   * 在拖动操作开端运行的脚本。
   * @param event
   */
  ondragstart(event: DragEvent) { }
  /**
   * 当被拖元素正在被拖放时运行的脚本。
   * @param event
   */
  ondrop(event: DragEvent) { }
  /**
   * 当元素上按下鼠标按钮时触发。
   * @param event
   */
  onmousedown(event: MouseEvent) {
    // this.mouseDown = this.windowToCanvas(
    //   event.clientX,
    //   event.clientY
    // );
    this.mouseDown = { x: event.offsetX, y: event.offsetY };
  }
  /**
   * 当鼠标指针移动到元素上时触发。
   * @param event
   */
  onmousemove(event: MouseEvent) {
    this.mouseMove = { x: event.offsetX, y: event.offsetY };
  }
  /**
   * 当鼠标指针移出元素时触发。
   * @param event
   */
  onmouseout(event: MouseEvent) { }
  /**
   * 当鼠标指针移动到元素上时触发。
   * @param event
   */
  onmouseover(event: MouseEvent) { }
  /**
   * 当在元素上释放鼠标按钮时触发。
   * @param event
   */
  onmouseup(event: MouseEvent) {
    this.mouseUp = { x: event.offsetX, y: event.offsetY };
  }
  /**
   * 当鼠标滚轮正在被滚动时运行的脚本。
   * @param event
   */
  onwheel(event: WheelEvent) { }
}
