import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import { MapProjectionService } from './map-projection.service'
@Component({
  selector: 't203-map-projection',
  templateUrl: './map-projection.component.html',
  styleUrls: ['./map-projection.component.scss'],
})
export class MapProjectionComponent implements OnInit {
  public title = environment.t203_map_projection.title

  constructor(private service: MapProjectionService) {}

  ngOnInit(): void {}

  public onOpenClick() {
    this.openFileDialog((event) => {
      this.service.openFile(event.target.files[0])
    })
  }

  public onSaveClick() {
    const filename = this.service.createFileName()
    this.service.saveFile(filename)
  }

  public onMercatorClick() {
    //TODO:
    this.service.ToMercator()
  }
  public onMercatorClick1() {
    //TODO:
    this.service.ToMercator1()
  }
  private openFileDialog(callback) {
    var inputEl = document.createElement('input')
    inputEl.type = 'file'
    inputEl.accept = 'application/json, text/plain'
    inputEl.multiple = false
    if (typeof callback === 'function') {
      inputEl.addEventListener('change', callback)
    }
    inputEl.dispatchEvent(new MouseEvent('click'))
  }
}
