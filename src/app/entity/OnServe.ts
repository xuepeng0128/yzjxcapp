import {Department} from './Department';
import {Duty} from './Duty';

export class OnServe {
  no: number  ;
  beginServeTime: Date;
  department: Department;
  serve: Duty;
  endServeTime: Date;


  constructor(options: {no?: number, beginServeTime?: Date, department?: Department, serve?: Duty, endServeTime?: Date}= {}) {
    this.no = options.no;
    this.beginServeTime = options.beginServeTime;
    this.department = options.department;
    this.serve = options.serve;
    this.endServeTime = options.endServeTime;
  }
}
