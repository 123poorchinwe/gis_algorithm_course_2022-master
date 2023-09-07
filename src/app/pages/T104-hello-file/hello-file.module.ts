import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { HelloFileRoutingModule } from './hello-file-routing.module';
import { HelloFileComponent } from './hello-file.component';

@NgModule({
  declarations: [
    HelloFileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NzLayoutModule,
    NzButtonModule,
    NzIconModule,
    CodemirrorModule,
    HelloFileRoutingModule
  ],
  bootstrap: [HelloFileComponent]
})
export class HelloFileModule { }
