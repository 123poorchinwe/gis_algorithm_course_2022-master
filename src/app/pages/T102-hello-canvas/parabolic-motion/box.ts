/**
 *
 */
export class Box {

  /**
   * 初始速度，速度衰减
   */
  static VELOCITY_X: number = 5.0;
  static VELOCITY_Y: number = 1.0;
  static Velocity_Attenuation: number = 0.5;

  /**
   * box 大小、颜色
   */
  private x: number;
  private y: number;
  private w: number;
  private h: number;
  private rgba: string;

  /**
   * 水平速度，垂直速度
   */
  private vx: number;
  private vy: number;
  private va: number;

  constructor(x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    this.rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + '1)';

    // 初始化速度
    this.vx = Box.VELOCITY_X + Math.random() * 10;
    this.vy = Box.VELOCITY_Y;
    this.va = Box.Velocity_Attenuation;
  }

  /**
   * 状态更新
   * @param width 工作面宽度
   * @param height 工作面高度
   */
  public update(width: number, height: number) {
    // 水平匀速，碰界反向
    if (this.x < 0) {
      this.x = 0;
      this.vx *= -1;
    }
    if (this.x > (width - this.w)) {
      this.x = width - this.w;
      this.vx *= -1;
    }

    if (this.y < 0) {
      // 碰上界反向
      this.y = 0;
      this.vy *= -1;
    }
    if (this.y < (height - this.h)) {
      // 下落状态，加速
      this.vy += .25;
    }
    if (this.y > (height - this.h)) {
      // 碰下界减速反向
      // this.vx *= .5;
      // this.vy *= .5;
      this.vx *= this.va;
      this.vy *= this.va;

      this.y = height - this.h;
      this.vy *= -1;
    }

    // 更新位置
    this.x += this.vx;
    this.y += this.vy;
  }

  public draw(ctx) {
    ctx.strokeStyle = this.rgba;
    ctx.strokeRect(this.x, this.y, this.w, this.h);
  }
}
