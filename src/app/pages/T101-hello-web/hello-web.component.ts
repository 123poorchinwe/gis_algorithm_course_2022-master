import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HelloWebService } from './hello-web.service';

@Component({
  selector: 't101-hello-web',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './hello-web.component.html',
  styleUrls: ['./hello-web.component.scss']
})
export class HelloWebComponent implements OnInit {

  public title = environment.t101_hello_web.title;

  constructor(private service: HelloWebService) { }

  ngOnInit(): void {
  }
}
