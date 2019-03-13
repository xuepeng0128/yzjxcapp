import {FormControl} from '@angular/forms';
import {Sex} from './Sex';
import {EducationLevel} from './EducationLevel';
import {OnServe} from './OnServe';

export class Employee {
  employeeId: string ;
  employeeName: string ;
  birthday: Date  ;
  cardId: string ;
  tel: string ;
  wxcode: string ;
  qqcode: string ;
  sex: Sex;
  address: string;
  educationLevel: EducationLevel;
  entryTime: Date; // 入职时间
  onDutyHis: Array<OnServe>; // 就职历史
  dutyState: number; // 当前状态(1.在职，2.停职，3.离职)


  constructor(options: {employeeId?: string, employeeName?: string, birthday?: Date, cardId?: string,
                        tel?: string, wxcode?: string, qqcode?: string, sex?: Sex, address?: string,
                        educationLevel?: EducationLevel, entryTime?: Date, onDutyHis?: Array<OnServe>, dutyState?: number} = {}) {
    this.employeeId = options.employeeId || '';
    this.employeeName = options.employeeName || '';
    this.birthday = options.birthday || new Date();
    this.cardId = options.cardId || '';
    this.tel = options.tel || '';
    this.wxcode = options.wxcode || '';
    this.qqcode = options.qqcode || '';
    this.sex = options.sex || new Sex(1, '男');
    this.address = options.address || '';
    this.educationLevel = options.educationLevel ;
    this.entryTime = options.entryTime ;
    this.onDutyHis = options.onDutyHis;
    this.dutyState = options.dutyState || 1;
  }
}
