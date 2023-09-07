import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { TopologyService } from './topology.service';

@Component({
  selector: 't210-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.scss']
})
export class TopologyComponent implements OnInit {

  public title = environment.t210_topology.title;

  constructor(private service: TopologyService) { }

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

  public onPolygonizeTurfClick() {
    this.service.polygonizeTurf();
  }

  public onTopologyClick() {
    this.service.topology();
  }

}
