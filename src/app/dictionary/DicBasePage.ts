import {iif, Observable, of} from 'rxjs';
import {IBaseOpsService} from '../shared/IBaseOpsService';
import {PayKind} from '../entity/PayKind';
import {NzMessageService} from 'ng-zorro-antd';
import {flatMap, map} from 'rxjs/operators';
import {MSG_DELETE_ERROR, MSG_DELETE_SUCCESS, MSG_SAVE_ERROR, MSG_SAVE_SUCCESS} from '../shared/SysMessage';
import {IPage} from '../shared/BaseDicOps';
import {DicBaseOps} from './service/DicBaseOps';

export abstract class DicBasePage<T, E> {
  protected opsDic: T;
  protected pageState: 'browse' | 'add' | 'edit' = 'browse';
  dicList$: Observable<Array<E>>;
  constructor(private dicSvr: any & DicBaseOps<T, E> , public message: NzMessageService  ) {
  }
  protected queryList = () => {
    this.dicList$ = this.dicSvr.onQuery(this.queryParams);
  }
  protected  save = () => {
      iif(
        () => this.pageState === 'add',
        this.dicSvr.onInsert(this.opsDic),
        this.dicSvr.onUpdate(this.opsDic)
      ).subscribe(result => {
          if (result) {
            this.dicList$ = this.dicSvr.onQuery(this.queryParams);
            this.message.info(MSG_SAVE_SUCCESS);
          } else {
            this.message.warning(MSG_SAVE_ERROR);
          }
        });
  }
  protected delete = () => {
      this.dicSvr.onDelete(this.opsDic).pipe(
        flatMap(re => {
          if (!re) {
            this.message.warning(MSG_DELETE_ERROR);
            return of(false);
          } else {
            this.dicList$ = this.dicSvr.onQuery(this.queryParams);
            this.message.info(MSG_DELETE_SUCCESS);
            return of(true);
          }
        })
      ).subscribe(re => console.log('ok'));
  }
}
