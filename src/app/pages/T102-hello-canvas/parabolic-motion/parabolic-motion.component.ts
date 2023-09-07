import { AfterViewInit, Component, HostListener, OnInit, OnDestroy } from '@angular/core';
// import { Observable, of, from, fromEvent } from 'rxjs';

import { GUI } from 'dat.gui';

import { Box } from './box';

@Component({
  selector: 't102-parabolic-motion',
  templateUrl: './parabolic-motion.component.html',
  styleUrls: ['./parabolic-motion.component.scss']
})
export class ParabolicMotionComponent implements OnInit, AfterViewInit, OnDestroy {

  private el: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width;
  private height;
  private boxes: Box[];

  private timer = null;
  private gui: GUI;

  constructor() { }

  // 获取窗口变化，方法2
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.reset();
  }

  ngOnInit(): void {
    this.initDatGUI();
  }

  ngAfterViewInit(): void {
    this.el = document.getElementById("t102-parabolic-motion-canvas") as HTMLCanvasElement;

    this.reset();

    //TODO: 下面语句的含义是什么？
    this.timer = setInterval(function () {
      this.boxes.push(new Box(0, 0, 20, 20));
    }.bind(this), 1000);

    this.animate();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }

    // 移除Dat.GUI
    this.removeDatGUI();
  }

  private initDatGUI() {
    const options = {
      message: 'Parabolic Motion',
      vel_x: Box.VELOCITY_X,
      vel_y: Box.VELOCITY_Y,
      vel_a: Box.Velocity_Attenuation,
      reset_boxs: () => {
        this.boxes = [];
      }
    };
    this.gui = new GUI({ name: 'Parabolic Motion' });
    this.gui.add(options, 'message');
    // this.gui.remember(options);
    this.gui.add(options, 'vel_x').min(5).max(100).step(10).onFinishChange((value) => {
      Box.VELOCITY_X = value;
    });
    this.gui.add(options, 'vel_y').min(1).max(50).step(10).onFinishChange((value) => {
      Box.VELOCITY_Y = value;
    });
    this.gui.add(options, 'vel_a').min(0.25).max(1.0).step(0.05).onFinishChange((value) => {
      Box.Velocity_Attenuation = value;
    });
    this.gui.add(options, 'reset_boxs');

    // 添加dat.gui到容器
    const t = this.gui.domElement;
    document.getElementById('t102-parabolic-motion-canvas-datgui').appendChild(t);
    // 修改 dat.gui 样式
    // t.style.marginTop = '88px';
    // t.style.marginRight = '24px';
    // this.gui.domElement.style = 'margin-top:88px;margin-right:24px';
    // this.gui.domElement.style = 'float:right;';
  }

  private removeDatGUI() {
    const t = this.gui.domElement;
    t.remove();
  }

  private reset() {
    // 清空数据
    this.boxes = [];
    // 重新设置参数
    this.width = this.el.clientWidth;
    this.height = this.el.clientHeight;
    this.el.width = this.width;
    this.el.height = this.height;
    this.ctx = this.el.getContext('2d');
  }

  public draw() {
    //TODO: 下面语句的含义是什么？
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.globalCompositeOperation = 'lighter';

    this.boxes.forEach(item => {
      item.draw(this.ctx);
    });
  }

  public update() {
    //TODO: 下面语句的含义是什么？
    const W = this.el.clientWidth;
    const H = this.el.clientHeight;

    this.boxes.forEach(item => {
      item.update(this.width, this.height);
    });
  }

  public animate() {
    //TODO: 下面语句的含义是什么？
    window.requestAnimationFrame(this.animate.bind(this));
    this.draw();
    this.update();
  }
}
