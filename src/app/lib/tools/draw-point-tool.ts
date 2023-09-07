import { AbstractTool } from './abstract-tool'

export class DrawPointTool extends AbstractTool {
  /**
   *
   */
  private _point
  /**
   *
   * @param canvas
   * @param options
   */
  constructor(canvas: HTMLCanvasElement, options?: {}) {
    super(canvas, options)
  }

  onmousedown(event: MouseEvent) {
    super.onmousedown(event)

    //TODO: 请同学们实现
    if (event.button == 0) {
      this._point = this.mouseDown
      // 保存canvas绘图表面
      this.saveDrawingSurface()
      this.draw()
    }
  }

  // 绘制线段
  private draw() {
    this.ctx.save()

    this.ctx.beginPath() // 清除当前路径
    this.ctx.arc(this.mouseDown.x, this.mouseDown.y, 5.0, 0.0, 2 * Math.PI)
    // this.ctx.closePath();

    this.ctx.lineWidth = this.options['lineWidth']
    this.ctx.strokeStyle = this.options['strokeStyle']
    this.ctx.stroke()
    // this.ctx.fillStyle = this.options['fillStyle'];
    // this.ctx.fill();

    this.ctx.restore()
  }
}
