import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloMouseRoutingModule } from './hello-mouse-routing.module';
import { HelloMouseComponent } from './hello-mouse.component';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CanvasLayerModule } from './canvas-layer/canvas-layer.module';


@NgModule({
  declarations: [
    HelloMouseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzRadioModule,
    NzIconModule,
    HelloMouseRoutingModule,
    CanvasLayerModule
  ],
  bootstrap: [HelloMouseComponent]
})
export class HelloMouseModule { }
