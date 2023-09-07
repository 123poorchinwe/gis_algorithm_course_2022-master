import { Component, OnInit } from '@angular/core'
import { BufferOverlayService } from '../buffer-overlay.service'
@Component({
  selector: 't216-geojson',
  templateUrl: './geojson.component.html',
  styleUrls: ['./geojson.component.scss'],
})
export class GeoJsonComponent implements OnInit {
  /**
   *
   */
  public get code() {
    //TODO: 请同学们实现
    // return ''
    return this.service.activeSource.geojson_string
  }
  public set code(value) {
    //TODO: 请同学们实现
    this.service.activeSource.geojson_string = value
  }

  constructor(private service: BufferOverlayService) {}

  ngOnInit(): void {}
}
