import {NzMessageService} from 'ng-zorro-antd';
import {MSG_DELETE_ERROR, MSG_DELETE_SUCCESS, MSG_SAVE_ERROR, MSG_SAVE_SUCCESS} from './SysMessage';
import {iif, Observable, of} from 'rxjs';
import {IBaseDicService} from './IBaseDicService';
import {flatMap, map} from 'rxjs/operators';
import {IPayKind} from '../entity/IPayKind';

export interface IPage {
    pageSize: number;
    pageNo:  number;
}
export abstract class BaseDicOps<T, E extends T= T> {
    protected opsDic: T;
    protected pageState: 'browse' | 'add' | 'edit' = 'browse';
    queryParams: any & IPage;
    dicList$: Observable<Array<E | T>>;
    total$: Observable<number>;
    saveLoading$: Observable<boolean>;
    deleteLoading$: Observable<boolean>;
    constructor(private dicSvr: any & IBaseDicService<IPayKind, IPayKind>, public message: NzMessageService  ) {
    }
    protected queryList = () => {
        this.dicList$ = this.dicSvr.onQuery(this.queryParams);
        this.total$ = this.dicSvr.onQueryTotal(this.queryParams);
    }
    protected pageChange = (e) => {
      this.queryParams.pageNo = e;
      this.dicList$ = this.dicSvr.onQuery(this.queryParams);
    }
    protected  save = () => {
          this.saveLoading$ =
           iif(
             () => this.pageState === 'add',
                       this.dicSvr.onInsert(this.opsDic),
                       this.dicSvr.onUpdate(this.opsDic)
           ).pipe(
             map(result => {
               if (result) {
                 this.message.info(MSG_SAVE_SUCCESS);
                 return true;
               } else {
                 this.message.warning(MSG_SAVE_ERROR);
                 return false;
               }
             })
           );
    }
    protected delete = () => {
              this.deleteLoading$ =
              this.dicSvr.onDelete(this.opsDic).pipe(
                  flatMap(re => {
                       if (!re) {
                          this.message.warning(MSG_DELETE_ERROR);
                          return of(false);
                       } else {
                         this.queryParams.pageNo = 1;
                         this.dicList$ = this.dicSvr.onQuery(this.queryParams);
                         this.total$ = this.dicSvr.onQueryTotal(this.queryParams);
                         this.message.info(MSG_DELETE_SUCCESS);
                         return of(true);
                       }
                  })
              );
    }

}
