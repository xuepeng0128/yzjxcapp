/**
 * 字典service 基础接口
 *
 */
import {Observable} from 'rxjs';
import {IPage} from './BaseDicOps';

export interface IBaseOpsService<T, E extends T = T> {
    // 查询
    onQuery(queryParams: any ): Observable<Array<E|T>>;

    // 明细
    onDetail(arg: T|E) ;

    // 查询总数
    onQueryTotal(queryParams: any ): Observable<number>;
    // 插入
    onInsert(arg: T): Observable<string>;
    // 修改
    onUpdate(arg: T): Observable<boolean>;
    // 删除
    onDelete(arg: T): Observable<boolean>;

}
