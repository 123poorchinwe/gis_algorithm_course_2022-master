import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';


@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    GridRoutingModule
  ],
  bootstrap: [GridComponent]
})
export class GridModule { }
