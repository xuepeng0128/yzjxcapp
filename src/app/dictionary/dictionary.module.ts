import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictionaryRoutingModule } from './dictionary-routing.module';
import { UnitComponent } from './unit/unit.component';

@NgModule({
  declarations: [ UnitComponent],
  imports: [
    CommonModule,
    DictionaryRoutingModule
  ]
})
export class DictionaryModule { }
