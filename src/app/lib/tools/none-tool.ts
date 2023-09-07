import { AbstractTool } from './abstract-tool'

export class NoneTool extends AbstractTool {
  /**
   *
   * @param canvas
   * @param options
   */
  constructor(canvas: HTMLCanvasElement, options?: {}) {
    super(canvas, options)
  }
}
