import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HelloOpenLayersService } from './hello-open-layers.service';

@Component({
  selector: 't109-hello-openlayers',
  templateUrl: './hello-open-layers.component.html',
  styleUrls: ['./hello-open-layers.component.scss']
})
export class HelloOpenLayersComponent implements OnInit {

  public title = environment.t109_hello_openlayers.title;

  constructor(private service: HelloOpenLayersService) { }

  ngOnInit(): void {
  }

}
