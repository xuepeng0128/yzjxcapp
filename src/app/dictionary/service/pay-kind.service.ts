import { Injectable } from '@angular/core';
import {IBaseDicService} from '../../shared/IBaseDicService';
import {Observable} from 'rxjs';
import {IPage} from '../../shared/BaseDicOps';
import {PayKind} from '../../entity/PayKind';

@Injectable({
  providedIn: 'root'
})
export class PayKindService implements IBaseDicService<PayKind, PayKind> {

  constructor() { }

  onDelete(arg: PayKind): Observable<boolean> {
    return undefined;
  }

  onInsert(arg: PayKind): Observable<boolean> {
    return undefined;
  }



  onQueryTotal(queryParams: any): Observable<number> {
    return undefined;
  }

  onUpdate(arg: PayKind): Observable<boolean> {
    return undefined;
  }

  onQuery(queryParams: & IPage): Observable<Array<PayKind>> {
    return undefined;
  }
}
