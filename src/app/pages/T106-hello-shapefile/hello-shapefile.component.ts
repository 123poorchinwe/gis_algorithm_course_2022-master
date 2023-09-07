import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HelloShapefileService } from './hello-shapefile.service';

@Component({
  selector: 't106-hello-shapefile',
  templateUrl: './hello-shapefile.component.html',
  styleUrls: ['./hello-shapefile.component.scss']
})
export class HelloShapefileComponent implements OnInit {

  public title = environment.t106_hello_shapefile.title;

  constructor(
    private service: HelloShapefileService
  ) { }

  ngOnInit(): void { }

  public onOpenShapefileClick() {
    this.openFileDialog('.shp, .dbf', true, (event) => {
      let shpfile = undefined;
      let dbffile = undefined;
      if (event.target.files.length > 2)
        return;
      //TODO: 如何基于异步打开多个文件？
      for (let i = 0; i < event.target.files.length; i++) {
        const file = event.target.files[i];
        const filename = file.name;
        const ext = filename.substring(filename.lastIndexOf('.') + 1, filename.length).toLowerCase();
        if (ext == 'shp') {
          shpfile = file;
        } else if (ext == 'dbf') {
          dbffile = file;
        }
      }
      this.service.openShapefile(shpfile, dbffile);
    });
  }

  public onOpenGeoJsonClick() {
    this.openFileDialog('application/json, text/plain', false, (event) => {
      this.service.openGeoJson(event.target.files[0]);
    });
  }

  public onSaveClick() {
    const filename = this.service.createFileName();
    this.service.saveFile(filename);
  }

  /**
   *
   * @param callback
   */
  private openFileDialog(accept, multiple, callback) {
    //TODO: 文件对话框是如何创建和使用的?
    //TODO: 什么是回调函数?
    //TODO: 选择打开多个文件是如何设置的？
    var inputEl = document.createElement('input');
    inputEl.type = 'file';
    inputEl.accept = accept;
    inputEl.multiple = multiple;
    if (typeof callback === 'function') {
      inputEl.addEventListener('change', callback);
    }
    inputEl.dispatchEvent(new MouseEvent('click'));
  }

}
