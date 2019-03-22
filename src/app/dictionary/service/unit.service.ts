import { Injectable } from '@angular/core';
import {IBaseOpsService} from '../../shared/IBaseOpsService';
import {Unit} from '../../entity/Unit';
import {HttpService} from '../../shared/service/baseapi/http.service';
import {webApiUrl} from '../../shared/webApiUrl';
import {DicBaseOps} from './DicBaseOps';

@Injectable({
  providedIn: 'root'
})
export class UnitService extends DicBaseOps<Unit, Unit> {

  constructor(public httpsvr: HttpService) {
    super<Unit, Unit>();
    super.httpsvr = this.httpsvr;
    super.opsUrl = {
          queryUrl: webApiUrl.WEBAPI_DIC_UNITLIST,
          insertUrl: webApiUrl.WEBAPI_DIC_INSERTUNIT,
          updateUrl: webApiUrl.WEBAPI_DIC_UPDATEUNIT,
          deleteUrl: webApiUrl.WEBAPI_DIC_DELETEUNIT
    };
  }
}
