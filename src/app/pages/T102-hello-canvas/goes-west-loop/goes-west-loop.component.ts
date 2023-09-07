import { Component, OnDestroy, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as moment from 'moment';

import { environment } from 'src/environments/environment';
import { GoesWestLoopService } from './goes-west-loop.service';

@Component({
  selector: 't102-goes-west-loop',
  templateUrl: './goes-west-loop.component.html',
  styleUrls: ['./goes-west-loop.component.scss']
})
export class GoesWestLoopComponent implements OnInit, OnDestroy {

  private goes;
  private playFrameIndex = 0;
  private playOrient = 1;
  private timer = null;

  public buttonText = 'pause';

  constructor(private frameService: GoesWestLoopService) { }

  ngOnInit(): void {
    this.getFrames();
  }

  ngOnDestroy(): void {
    this.end();
    // throw new Error('Method not implemented.');
  }

  pause(): void {
    if (this.timer) {
      this.end();
      this.buttonText = 'play';
    } else {
      this.start();
      this.buttonText = 'pause';
    }
  }

  private getFrames(): void {
    this.frameService.getFrames().subscribe(result => {
      // window.console.log(result);
      this.goes = result;
      this.goes.frames.forEach(element => {
        element.url = environment.t102_hello_canvas.goes_west_loop.imageBaseUrl + element.url;
      });

      this.start();
    });
  }

  private play(): void {

    d3.select('#goes-west-loop-image').attr('src', this.goes.frames[this.playFrameIndex].url);
    d3.select('#goes-west-loop-play').attr('value', this.playFrameIndex);
    let t = moment(this.goes.frames[this.playFrameIndex].time, 'YYYYMMDDHHmmss');
    d3.select('#goes-west-loop-label').text(t.format('YYYY-MM-DD HH:mm:ss'));

    this.playFrameIndex = this.playFrameIndex + this.playOrient;
    this.playFrameIndex = this.playFrameIndex % this.goes.frames.length;
    if (this.playFrameIndex === 0) {
      this.playOrient = 1;
    }
    else if (this.playFrameIndex === this.goes.frames.length - 1) {
      this.playOrient = -1;
    }
  }

  private start(): void {
    d3.select('#goes-west-loop-play').attr('min', 0).attr('max', this.goes.frames.length - 1);
    // d3.select('#goes-west-loop-image').attr('src', this.frames.frames[0].url);
    this.timer = setInterval(() => {
      this.play();
    }, 50);
  }

  private end(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

}
