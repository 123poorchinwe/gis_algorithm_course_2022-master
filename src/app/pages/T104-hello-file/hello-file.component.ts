import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

import 'codemirror/lib/codemirror';
import 'codemirror/mode/javascript/javascript';

import { HelloFileService } from './hello-file.service';

@Component({
  selector: 't104-hello-file',
  templateUrl: './hello-file.component.html',
  styleUrls: ['./hello-file.component.scss']
})
export class HelloFileComponent implements OnInit, AfterViewInit, OnDestroy {

  public title = environment.t104_hello_file.title;

  public get code() {
    return this.service.code;
  };
  public set code(value) {
    this.service.code = value;
  }

  constructor(
    private service: HelloFileService
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  public onOpenClick() {
    this.openFileDialog((event) => {
      this.service.openFile(event.target.files[0]);
    });
  }

  public onDownloadClick() {
    const url = environment.t104_hello_file.dataUrl;
    this.service.downloadFile(url);
  }

  public onSaveClick() {
    const filename = this.service.createFileName();
    this.service.saveFile(filename);
  }

  /**
   *
   * @param callback
   */
  private openFileDialog(callback) {
    //TODO: 文件对话框是如何创建和使用的?
    //TODO：什么是回调函数?
    let inputEl = document.createElement("input");
    inputEl.type = "file";
    inputEl.accept = "application/json, text/plain";
    inputEl.multiple = false;
    if (typeof callback === "function") {
      inputEl.addEventListener("change", callback);
    }
    inputEl.dispatchEvent(new MouseEvent("click"));
  }
}
