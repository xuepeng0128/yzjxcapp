import { Injectable } from '@angular/core';
import {IBaseDicService} from '../../shared/IBaseDicService';
import {Observable} from 'rxjs';
import {IPage} from '../../shared/BaseDicOps';
import {IPayKind} from '../../entity/IPayKind';

@Injectable({
  providedIn: 'root'
})
export class PayKindService implements IBaseDicService<IPayKind, IPayKind> {

  constructor() { }

  onDelete(arg: IPayKind): Observable<boolean> {
    return undefined;
  }

  onInsert(arg: IPayKind): Observable<boolean> {
    return undefined;
  }



  onQueryTotal(queryParams: any): Observable<number> {
    return undefined;
  }

  onUpdate(arg: IPayKind): Observable<boolean> {
    return undefined;
  }

  onQuery(queryParams: & IPage): Observable<Array<IPayKind>> {
    return undefined;
  }
}
