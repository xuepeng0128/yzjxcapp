import { Component, OnInit } from '@angular/core';
import {BaseDicOps} from '../../shared/BaseDicOps';
import {PayKind} from '../../entity/PayKind';
import {NzMessageService} from 'ng-zorro-antd';
import {PayKindService} from '../service/pay-kind.service';

@Component({
  selector: 'app-pay-kind',
  templateUrl: './pay-kind.component.html',
  styleUrls: ['./pay-kind.component.css']
})
export class PayKindComponent extends BaseDicOps<PayKind, PayKind> implements OnInit  {

  constructor(private paykindsvr: PayKindService, public message: NzMessageService ) {
    super(paykindsvr, message);
  }
  ngOnInit() {
  }
}
