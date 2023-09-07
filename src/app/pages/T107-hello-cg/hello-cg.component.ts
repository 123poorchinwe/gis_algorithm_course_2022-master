import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 't107-hello-cg',
  templateUrl: './hello-cg.component.html',
  styleUrls: ['./hello-cg.component.scss']
})
export class HelloCGComponent implements OnInit, AfterViewInit, OnDestroy {

  public title = environment.t107_hello_cg.title;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

}
