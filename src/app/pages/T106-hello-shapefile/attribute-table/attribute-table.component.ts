import { Component, HostListener, OnInit } from '@angular/core';

import { HelloShapefileService } from '../hello-shapefile.service';

@Component({
  selector: 't106-attribute-table',
  templateUrl: './attribute-table.component.html',
  styleUrls: ['./attribute-table.component.scss']
})
export class AttributeTableComponent implements OnInit {

  private tableEl: HTMLElement;
  public scrollWidth = 0;
  public scrollHeight = 0;

  public get code() {
    return this.service.code;
  };
  public set code(value) {
    this.service.code = value;
  }

  public get features() {
    this.reset();
    return this.service.features;
  }

  // 获取窗口变化
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.reset();
  }

  constructor(private service: HelloShapefileService) { }

  ngOnInit(): void {
    this.tableEl = document.getElementById("t106-attribute-table");
    this.reset();
  }

  private reset() {
    let cols = this.service.features.dictionary.length;
    if (cols < 3) cols = 3;
    // 重新设置参数
    this.scrollWidth = 180 * cols;
    // this.scrollWidth = this.tableEl.clientWidth - 18;
    this.scrollHeight = this.tableEl.clientHeight - 39;
  }

}
