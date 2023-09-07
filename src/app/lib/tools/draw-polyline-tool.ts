import { AbstractTool } from './abstract-tool'

export class DrawPolylineTool extends AbstractTool {
  /**
   * 坐标点集
   */
  private _startPoint
  private _points = []
  /**
   * 用于标识鼠标是否处于拖拽状态，只有拖拽状态才可以进行绘制
   */
  private _dragging = false
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
    switch (event.button) {
      case 0: {
        if (this._dragging) {
          this._points.push(this.mouseDown)
        } else {
          // 保存canvas绘图表面
          this.saveDrawingSurface()
          this._points = []
          // 标识鼠标处于拖拽状态
          this._dragging = true
          this._startPoint = this.mouseDown
        }
        break
      }
      case 2: {
        if (this._dragging) {
          this._points.unshift(this._startPoint)
          this._points.push(this.mouseDown)
          // 标识鼠标不在拖拽状态
          this._dragging = false
        }
        break
      }
    }
  }
  onmousemove(event: MouseEvent) {
    super.onmousemove(event)

    //TODO: 请同学们实现
    if (this._dragging) {
      // 恢复绘图表面
      this.restoreDrawingSurface()
      // 绘制线段
      this.draw()
    }
  }
  ondblclick(event: MouseEvent) {
    super.ondblclick(event)

    //TODO: 请同学们实现
    // 标识鼠标不在拖拽状态
    this._dragging = false
  }

  // 绘制线段
  private draw() {
    this.ctx.save()

    this.ctx.beginPath()
    this.ctx.moveTo(this._startPoint.x, this._startPoint.y)
    this._points.forEach((pnt) => {
      this.ctx.lineTo(pnt.x, pnt.y)
    })
    this.ctx.lineTo(this.mouseMove.x, this.mouseMove.y)
    // this.ctx.closePath();

    this.ctx.lineWidth = this.options['lineWidth']
    this.ctx.strokeStyle = this.options['strokeStyle']
    this.ctx.stroke()

    this.ctx.restore()
  }
}
