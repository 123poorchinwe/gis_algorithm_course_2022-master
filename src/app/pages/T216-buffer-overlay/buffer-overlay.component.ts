import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import { BufferOverlayService } from './buffer-overlay.service'
@Component({
  selector: 't216-buffer-overlay',
  templateUrl: './buffer-overlay.component.html',
  styleUrls: ['./buffer-overlay.component.scss'],
})
export class BufferOverlayComponent implements OnInit {
  public title = environment.t216_buffer_overlay.title

  constructor(private service: BufferOverlayService) {}

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

  public onOverlayClick() {
    this.service.bufferoverlay()
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
