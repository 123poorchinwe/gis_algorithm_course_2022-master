import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DouglasPeukerService } from './douglas-peuker.service';

@Component({
  selector: 't208-douglas-peuker',
  templateUrl: './douglas-peuker.component.html',
  styleUrls: ['./douglas-peuker.component.scss']
})
export class DouglasPeukerComponent implements OnInit {

  public title = environment.t208_douglas_peuker.title;

  constructor(private service: DouglasPeukerService) { }

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

  public onDouglasTurfClick() {
    this.service.douglasTurf();
  }

  public onDouglasClick() {
    this.service.douglas();
  }
}
