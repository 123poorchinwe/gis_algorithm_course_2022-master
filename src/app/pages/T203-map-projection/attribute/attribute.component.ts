import { Component, HostListener, OnInit } from '@angular/core'
import { MapProjectionService } from '../map-projection.service'
@Component({
  selector: 't203-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
})
export class AttributeComponent implements OnInit {
  private tableEl: HTMLElement
  public scrollWidth = 0
  public scrollHeight = 0

  /**
   * mock 构建框架用特征要素集
   */
  // private _mock_features = {
  //   dictionary: [], //属性字段列表
  //   geometry: [],   //几何对象列表
  //   properties: [], //属性记录列表
  // }
  public get features() {
    this.reset()
    // return this._mock_features;
    return this.service.source.features
  }

  // 获取窗口变化
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.reset()
  }

  constructor(private service: MapProjectionService) {}

  ngOnInit(): void {
    this.tableEl = document.getElementById('t203-attribute-table')
    this.reset()
  }

  public onLocation(sid) {
    this.service.locationFeature.emit(sid)
  }

  private reset() {
    let cols = 0 //mock 初始化用
    if (cols < 3) cols = 3
    // 重新设置参数
    this.scrollWidth = 120 * cols
    // this.scrollWidth = this.tableEl.clientWidth - 18;
    this.scrollHeight = this.tableEl.clientHeight - 39
  }
}
