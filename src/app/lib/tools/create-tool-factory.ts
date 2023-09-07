import { NoneTool } from './none-tool'
import { SelectTool } from './select-tool'
import { DrawArcTool } from './draw-arc-tool'
import { DrawCircleTool } from './draw-circle-tool'
import { DrawPointTool } from './draw-point-tool'
import { DrawPolygonTool } from './draw-polygon-tool'
import { DrawPolylineTool } from './draw-polyline-tool'
import { DrawRectangleTool } from './draw-rectangle-tool'

/**
 *
 */
export const CreateToolFactory = {
  NoneTool: (canvas: HTMLCanvasElement, options?: {}) => {
    return new NoneTool(canvas, options)
  },

  SelectTool: (canvas: HTMLCanvasElement, options?: {}) => {
    return new SelectTool(canvas, options)
  },

  DrawPointTool: (canvas: HTMLCanvasElement, options?: {}) => {
    return new DrawPointTool(canvas, options)
  },

  DrawPolylineTool: (canvas: HTMLCanvasElement, options?: {}) => {
    return new DrawPolylineTool(canvas, options)
  },

  DrawArcTool: (canvas: HTMLCanvasElement, options?: {}) => {
    return new DrawArcTool(canvas, options)
  },

  DrawPolygonTool: (canvas: HTMLCanvasElement, options?: {}) => {
    return new DrawPolygonTool(canvas, options)
  },

  DrawRectangleTool: (canvas: HTMLCanvasElement, options?: {}) => {
    return new DrawRectangleTool(canvas, options)
  },

  DrawCircleTool: (canvas: HTMLCanvasElement, options?: {}) => {
    return new DrawCircleTool(canvas, options)
  },
}
