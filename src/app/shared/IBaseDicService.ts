/**
 * 字典service 基础接口
 *
 */
import {Observable} from 'rxjs';
import {IPage} from './BaseDicOps';

export interface IBaseDicService<T, E extends T = T> {
    // 查询
    onQuery(queryParams: any & IPage): Observable<Array<E|T>>;

    // 查询总数
    onQueryTotal(queryParams: any ): Observable<number>;
    // 插入
    onInsert(arg: T): Observable<boolean>;
    // 修改
    onUpdate(arg: T): Observable<boolean>;
    // 删除
    onDelete(arg: T): Observable<boolean>;

}
