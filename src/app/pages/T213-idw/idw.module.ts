import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { IDWRoutingModule } from './idw-routing.module';
import { IDWComponent } from './idw.component';


@NgModule({
  declarations: [
    IDWComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    IDWRoutingModule
  ],
  bootstrap: [IDWComponent]
})
export class IDWModule { }
