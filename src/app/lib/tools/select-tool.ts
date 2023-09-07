import { AbstractTool } from './abstract-tool'

export class SelectTool extends AbstractTool {
  /**
   *
   * @param canvas
   * @param options
   */
  constructor(canvas: HTMLCanvasElement, options?: {}) {
    super(canvas, options)
  }
}
