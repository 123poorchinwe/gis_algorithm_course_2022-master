import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { HelloWebRoutingModule } from './hello-web-routing.module';
import { HelloWebComponent } from './hello-web.component';

@NgModule({
  declarations: [
    HelloWebComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    HelloWebRoutingModule
  ],
  bootstrap: [HelloWebComponent]
})
export class HelloWebModule { }
