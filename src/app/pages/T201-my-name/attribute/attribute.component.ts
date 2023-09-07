import { Component, HostListener, OnInit } from '@angular/core';
import { MyNameService } from '../my-name.service';
@Component({
  selector: 't201-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {
  private tableEl: HTMLElement;
  public scrollWidth = 0;
  public scrollHeight = 0;
 
  /**
   * mock 构建框架用特征要素集
   */
  private _features = {
    dictionary: [], //属性字段列表
    geometry: [],   //几何对象列表
    properties: [], //属性记录列表
  }
 
  public get features() {
    this.reset();
    return this.service.source.features;

    // return this._features;
  }
 
  
  // 获取窗口变化
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.reset();
  }

  constructor(private service: MyNameService) { }

  ngOnInit(): void {
    this.tableEl = document.getElementById("t201-attribute-table");
    this.reset();
  }

  public onLocation(sid) {
    this.service.locationFeature.emit(sid);
  }

  private reset() {
    let cols = this.service.source.features.dictionary.length;
    if (cols < 3) cols = 3;
    // 重新设置参数
    this.scrollWidth = 120 * cols;
    // this.scrollWidth = this.tableEl.clientWidth - 18;
    this.scrollHeight = this.tableEl.clientHeight - 39;
  }
}
