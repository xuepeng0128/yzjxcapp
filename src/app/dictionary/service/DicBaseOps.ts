import {IBaseOpsService} from '../../shared/IBaseOpsService';
import {HttpService} from '../../shared/service/baseapi/http.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface OpsUrl {
    queryUrl: string;
    insertUrl: string;
    updateUrl: string;
    deleteUrl: string;
}

export   class DicBaseOps{

  constructor() {
  }

 onDelete<T>(arg: T): Observable<boolean> {
    return this.httpsvr.onHttpGet(this.opsUrl.deleteUrl, arg).pipe(
      map(result => {
        if (result === 'fail') {
          return false;
        } else {
          return true;
        }
      } )
    );
  }

   onDetail(arg: T | E) {
   }

 onInsert(arg: T): Observable<string> {
   return this.httpsvr.onHttpPost(this.opsUrl.insertUrl, arg);
  }

  onQuery(queryParams: any): Observable<Array<E>> {
    return this.httpsvr.onHttpGet(this.opsUrl.queryUrl, queryParams);
  }

  onQueryTotal(queryParams: any): Observable<number> {
    return undefined;
  }

  onUpdate(arg: T): Observable<boolean> {
    return this.httpsvr.onHttpPost(this.opsUrl.updateUrl, arg).pipe(
      map(result => {
        if (result === 'fail') {
          return false;
        } else {
          return true;
        }
      } )
    );
  }




}