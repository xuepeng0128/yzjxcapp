import { Component, OnInit } from '@angular/core';
import {BaseDicOps} from '../../shared/BaseDicOps';
import {IPayKind} from '../../entity/IPayKind';
import {NzMessageService} from 'ng-zorro-antd';
import {PayKindService} from '../service/pay-kind.service';

@Component({
  selector: 'app-pay-kind',
  templateUrl: './pay-kind.component.html',
  styleUrls: ['./pay-kind.component.css']
})
export class PayKindComponent extends BaseDicOps<IPayKind, IPayKind> implements OnInit  {

  constructor(private paykindsvr: PayKindService, private message: NzMessageService ) {
    super(paykindsvr, message);
  }
  ngOnInit() {
  }
}
