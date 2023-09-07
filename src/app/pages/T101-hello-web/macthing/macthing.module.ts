import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MacthingComponent } from './macthing.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { MacthingRoutingModule } from './macthing-routing.module';

@NgModule({
  declarations: [
    MacthingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzListModule,
    NzSelectModule,
    MacthingRoutingModule
  ],
  bootstrap: [MacthingComponent]
})
export class MacthingModule { }
