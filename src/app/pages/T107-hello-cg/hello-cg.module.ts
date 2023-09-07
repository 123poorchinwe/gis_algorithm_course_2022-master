import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { HelloCGRoutingModule } from './hello-cg-routing.module';
import { HelloCGComponent } from './hello-cg.component';


@NgModule({
  declarations: [
    HelloCGComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    HelloCGRoutingModule
  ],
  bootstrap: [HelloCGComponent]
})
export class HelloCGModule { }
