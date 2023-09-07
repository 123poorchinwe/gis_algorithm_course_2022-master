import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { HelloOpenLayersRoutingModule } from './hello-open-layers-routing.module';
import { HelloOpenLayersComponent } from './hello-open-layers.component';

@NgModule({
  declarations: [
    HelloOpenLayersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    HelloOpenLayersRoutingModule
  ],
  bootstrap: [HelloOpenLayersComponent]
})
export class HelloOpenLayersModule { }
