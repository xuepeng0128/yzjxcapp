import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ENgxPrintModule} from 'e-ngx-print';
import { UnitSelectComponent } from './components/unit-select/unit-select.component';
import { PaykindSelectComponent } from './components/paykind-select/paykind-select.component';
import { BlankSelectComponent } from './components/blank-select/blank-select.component';
import { DutySelectComponent } from './components/duty-select/duty-select.component';
@NgModule({
  declarations: [UnitSelectComponent, PaykindSelectComponent, BlankSelectComponent, DutySelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ENgxPrintModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ENgxPrintModule,
    ]
})
export class PubModule { }
