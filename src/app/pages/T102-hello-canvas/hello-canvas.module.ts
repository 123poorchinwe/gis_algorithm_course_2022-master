import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { HelloCanvasRoutingModule } from './hello-canvas-routing.module';
import { HelloCanvasComponent } from './hello-canvas.component';

@NgModule({
  declarations: [
    HelloCanvasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    HelloCanvasRoutingModule
  ],
  bootstrap: [HelloCanvasComponent]
})
export class HelloCanvasModule { }
