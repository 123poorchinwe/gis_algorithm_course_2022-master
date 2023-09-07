import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HelloGeoJsonService } from './hello-geo-json.service';

@Component({
  selector: 't105-hello-geojson',
  templateUrl: './hello-geo-json.component.html',
  styleUrls: ['./hello-geo-json.component.scss']
})
export class HelloGeoJsonComponent implements OnInit, AfterViewInit, OnDestroy {

  public title = environment.t105_hello_geojson.title;

  public get geojson() {
    return this.service.geojson;
  }

  public get features() {
    return this.service.features;
  }

  constructor(private service: HelloGeoJsonService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
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
