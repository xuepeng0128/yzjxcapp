import { Injectable } from '@angular/core';
import {IBaseOpsService} from '../../shared/IBaseOpsService';
import {Observable} from 'rxjs';
import {Menu} from '../../entity/Menu';
import {HttpService} from '../../shared/service/baseapi/http.service';
import {INzTreeNode} from '../../shared/INzTreeNode';
import {NzTreeNode} from 'ng-zorro-antd';
import {webApiUrl} from '../../shared/webApiUrl';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IBaseOpsService<Menu, Menu> {

  constructor(private  httpsvr: HttpService) { }

  onDelete(arg: Menu): Observable<boolean> {
    return undefined;
  }

  onDetail(arg: Menu) {
  }

  onInsert(arg: Menu): Observable<boolean> {
    return undefined;
  }

  onQuery(queryParams: any): Observable<Array<Menu>> {
    return this.httpsvr.onHttpGet(webApiUrl.WEBAPI_MENU_LIST, {});
  }

  onQueryTotal(queryParams: any): Observable<number> {
    return undefined;
  }

  onUpdate(arg: Menu): Observable<boolean> {
    return undefined;
  }

  onNzTreeMenu( menulist: Array<Menu> , pareNode: INzTreeNode): INzTreeNode {
    const rootNode: INzTreeNode = pareNode ? pareNode : {
            title: '菜单',
            value: '0',
            key: '0',
            isLeaf: false,
            children: null};

    menulist.forEach(menu => {
            if (!rootNode.children) {
                 rootNode.children = new Array<INzTreeNode>();
            }
            const sNode =  this.onNzTreeMenu(menu.subMenu, {
              title: menu.menuName,
              value: menu.menuId,
              key:  menu.menuId,
              isLeaf: menu.subMenu ? false : true,
              children: null
            });
            rootNode.children.push(sNode);
    });
    return rootNode;
  }

}
