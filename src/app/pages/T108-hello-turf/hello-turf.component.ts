import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HelloTurfService } from './hello-turf.service';

@Component({
  selector: 't108-hello-turf',
  templateUrl: './hello-turf.component.html',
  styleUrls: ['./hello-turf.component.scss']
})
export class HelloTurfComponent implements OnInit {

  public title = environment.t108_hello_turf.title;

  constructor(private service: HelloTurfService) { }

  ngOnInit(): void {
  }

  public onBufferClick() {
    this.service.buffer();
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
