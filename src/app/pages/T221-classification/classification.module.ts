import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { ClassificationRoutingModule } from './classification-routing.module';
import { ClassificationComponent } from './classification.component';


@NgModule({
  declarations: [
    ClassificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    ClassificationRoutingModule
  ],
  bootstrap: [ClassificationComponent]
})
export class ClassificationModule { }
