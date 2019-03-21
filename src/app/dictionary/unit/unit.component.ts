import { Component, OnInit } from '@angular/core';
import {DicBasePage} from '../DicBasePage';
import {Unit} from '../../entity/Unit';
import {UnitService} from '../service/unit.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent extends DicBasePage<Unit, Unit> implements OnInit {

  constructor(private unitsvr: UnitService<Unit, Unit>, public message: NzMessageService) {
     super(this.unitsvr, this.message);
  }
  ngOnInit() {
    super.queryList();
  }

}
