import {Employee} from './Employee';

export class User {
  userId: string  ; // 账号
  userName: string ; // 用户名称
  passWord: string ; // 登录密码
  isManager: boolean; // 是否为管理员
  memo: string ; // 备注
  employee: Employee;
  constructor(options: {userId?: string, userName?: string, passWord?: string, isManager?: boolean, memo?: string, employee?: Employee}= {}) {
    this.userId = options.userId || '';
    this.userName = options.userName || '';
    this.passWord = options.passWord || '';
    this.isManager = options.isManager || false;
    this.memo = options.memo || '';
    this.employee = options.employee ;
  }
}
