import { Injectable } from '@angular/core';
import {HttpService} from '../../shared/service/baseapi/http.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DicService<T, E> {

  constructor(private httpsvr: HttpService) { }

  onDelete(arg: T, url: string): Observable<boolean> {
    return this.httpsvr.onHttpGet(url, arg).pipe(
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

  onInsert(arg: T, url: string): Observable<string> {
    return this.httpsvr.onHttpPost(url, arg);
  }

  onQuery(queryParams: any, url: string): Observable<Array<E>> {
    return this.httpsvr.onHttpGet(url, queryParams);
  }

  onQueryTotal(queryParams: any): Observable<number> {
    return undefined;
  }

  onUpdate(arg: T, url: string): Observable<boolean> {
    return this.httpsvr.onHttpPost(url, arg).pipe(
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
