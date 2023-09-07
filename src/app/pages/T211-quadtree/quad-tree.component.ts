import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QuadTreeService } from './quad-tree.service';

@Component({
  selector: 't211-quad-tree',
  templateUrl: './quad-tree.component.html',
  styleUrls: ['./quad-tree.component.scss']
})
export class QuadTreeComponent implements OnInit {

  public title = environment.t211_quadtree.title;

  constructor(private service: QuadTreeService) { }

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

  /**
   * 生成网格
   */
  public onBuildGridClick() {
    this.service.buildGrid();
  }

  /**
   * 合并网格
   */
  public onMergeGridClick() {
    this.service.mergeGrid();
  }
}
