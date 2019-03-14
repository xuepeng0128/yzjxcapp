export class Menu {
  menuId: string ; // 菜单编号
  menuName: string ; // 菜单名称
  subMenu: Array<Menu>; // 上级菜单编号
  url: string  ; // 链接地址
  powers: string ; // 权限


  constructor(options: {menuId?: string, menuName?: string, subMenu?: Array<Menu>, url?: string, powers?: string }= {}) {
    this.menuId = options.menuId || '';
    this.menuName = options.menuName || '';
    this.subMenu = options.subMenu ;
    this.url = options.url || '';
    this.powers = options.powers || '';
  }
}
