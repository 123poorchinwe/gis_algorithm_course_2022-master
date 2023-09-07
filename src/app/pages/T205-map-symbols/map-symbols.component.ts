import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import { MapSymbolsService } from './map-symbols.service'

@Component({
  selector: 't205-map-symbols',
  templateUrl: './map-symbols.component.html',
  styleUrls: ['./map-symbols.component.scss'],
})
export class MapSymbolsComponent implements OnInit {
  public title = environment.t205_map_symbols.title

  constructor(private service: MapSymbolsService) {}

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

  /**
   *
   * @param callback
   */
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

  public setImage() {
    this.service.displaySource.Post = true
  }
  public clearImage() {
    this.service.displaySource.Post = false
  }
}
