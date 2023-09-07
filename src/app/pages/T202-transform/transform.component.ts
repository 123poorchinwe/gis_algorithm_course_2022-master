import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

import { TransformService } from './transform.service';

@Component({
  selector: 't202-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.scss']
})
export class TransformComponent implements OnInit {

  public title = environment.t202_transform.title;

  public get action() {
    return this.service.action;
  }
  public set action(value) {
    this.service.action = value;
  }

  constructor(private service: TransformService) {
  }

  ngOnInit(): void {
  }

  public onOpenClick() {
    this.openFileDialog((event) => {
      this.service.openFile(event.target.files[0]);
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
  private openFileDialog(callback) {
    var inputEl = document.createElement("input");
    inputEl.type = "file";
    inputEl.accept = "application/json, text/plain";
    inputEl.multiple = false;
    if (typeof callback === "function") {
      inputEl.addEventListener("change", callback);
    }
    inputEl.dispatchEvent(new MouseEvent("click"));
  }

}
