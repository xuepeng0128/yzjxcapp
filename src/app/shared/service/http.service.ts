import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, delay, map} from 'rxjs/internal/operators';
import {UserStorageService} from './user-storage.service';
import {User} from '../../entity/User';
declare var globalParams: any;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient: HttpClient, private userstorage: UserStorageService) { }

  // get  方法
  public  onHttpGet = (url: string, queryParams: any): Observable<any> => {
    let paramData = '';
    const user = this.userstorage.Get() as User;
    if (queryParams === null) {queryParams = {}; }
    if (queryParams != null) {
      for (const i in queryParams) {
        if (Array.isArray(queryParams[i])) { continue; }
        if (typeof queryParams[i] === 'object') {
          if (queryParams[i] != null) {
            paramData = paramData === '' ? '?' : '&';
            paramData +=  i + '=' + JSON.stringify(queryParams[i]);
          }
        } else {
          if (queryParams[i] != null) {
            paramData += (paramData === '' ? '?' : '&');
            paramData += ( i + '=' + queryParams[i]);
          }
        }
      }
    }


    return this.httpclient.get<any>(  globalParams.serverBaseUrl + url + paramData) // globalParams.serverBaseUrl +
      .pipe(
        map(re => {
           return re;
        }),
        catchError(this.handleError)
      );
  }

// post 方法
  public onHttpPost = (url: string , queryParams: any): Observable<any> => {
    return this.httpclient.post<any>(globalParams.serverBaseUrl + url, queryParams, httpOptions) // globalParams.serverBaseUrl +
      .pipe(
        map(re => {
          return re;
        }),
        catchError(this.handleError)
      );
  }

  // 错误处理
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // 客户端网络连接错误.
      console.error('错误发生:', error.error.message);
    } else {

      //  未响应,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // 返回自定义错误信息
    return throwError(
      '请求服务端错误，请重试或联系运维人员.');
  }



  // ---------------------- 外部接口------------------------//


  // get  方法获取所有设备
  public  onHttpGetFromIdCard_All_Devices = (url: string): Observable<any> => {
    return this.httpclient.get<any>(globalParams.idcardDeviceRequestUrl + url )
      .pipe(
        map(re => {
          return re;
        }),
        catchError(this.handleError)
      );
  }
  // get  方法获取所有企业
  public  onHttpGetFromIdCard_All_Enterprise  = (url: string, systemId: string): Observable<any> => {
    return this.httpclient.get<any>(globalParams.idcardDeviceRequestUrl + url + '?systemId=' + (systemId || '') )
      .pipe(
        map(re => {
          return re;
        }),
        catchError(this.handleError)
      );
  }

  // get  方法获取人脸外接数据
  public  onHttpGetFromIdCard = (url: string): Observable<any> => {
    return this.httpclient.get<any>(globalParams.idcardDeviceRequestUrl + url )
      .pipe(
        map(re => {
          return re;
        }),
        catchError(this.handleError)
      );
  }
 // post 方法 获取人脸数据
  public onHttpPostFromIdCard = (url: string , queryParams: any): Observable<any> => {
    return this.httpclient.post<any>(globalParams.idcardDeviceRequestUrl + url, queryParams, httpOptions )
      .pipe(
        map(re => {
          return re;
        }),
        catchError(this.handleError)
      );
  }

}
