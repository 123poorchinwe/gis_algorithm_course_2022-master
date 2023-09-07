import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * 产品名称
   */
  productionName = environment.productionName;

  public constructor(private titleService: Title) {
    this.titleService.setTitle(this.productionName);
  }

  private _isCollapsed = true;
  public get isCollapsed() {
    // console.log(this._isCollapsed);
    return this._isCollapsed;
  }
  public set isCollapsed(value) {
    this._isCollapsed = value;
  }
}
