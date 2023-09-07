import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MyNameService } from './my-name.service';

@Component({
  selector: 't201-my-name',
  templateUrl: './my-name.component.html',
  styleUrls: ['./my-name.component.scss']
})
export class MyNameComponent implements OnInit {

  public title = environment.t201_my_name.title;

  constructor(private service: MyNameService) { }

  ngOnInit(): void {
  }

  //打开文件
  public onOpenClick() {
    this.openFileDialogue((event) => {
      this.service.openFile(event.target.files[0]);
    });
  }
  public openFileDialogue(callback) {
    let inputEl = document.createElement("input");
    inputEl.type = "file";
    inputEl.accept = "application/json, text/plain";
    inputEl.multiple = false;
    if (typeof callback === "function") {
      inputEl.addEventListener("change", callback);
    }
    inputEl.dispatchEvent(new MouseEvent("click"));
  }


  public onSaveClick() {
    const filename = this.service.createFileName();
    this.service.saveFile(filename);
  }

}
