import { Component, HostListener, OnInit } from '@angular/core';
import { HelloTurfService } from '../hello-turf.service';

@Component({
  selector: 't108-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {

  private tableEl: HTMLElement;
  public scrollWidth = 0;
  public scrollHeight = 0;

  public get features() {
    this.reset();
    return this.service.activeSource.features;
  }

  // 获取窗口变化
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.reset();
  }

  constructor(private service: HelloTurfService) { }

  ngOnInit(): void {
    this.tableEl = document.getElementById("t108-attribute-table");
    this.reset();
  }

  public onLocation(sid) {
    this.service.location(sid);
  }

  private reset() {
    let cols = this.service.activeSource.features.dictionary.length;
    if (cols < 3) cols = 3;
    // 重新设置参数
    this.scrollWidth = 120 * cols;
    // this.scrollWidth = this.tableEl.clientWidth - 18;
    this.scrollHeight = this.tableEl.clientHeight - 39;
  }

}
