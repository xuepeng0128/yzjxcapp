import {Duty} from './Duty';

export class Department {
  depId: string ;
  depName: string;
  subDep: Array<Department>;
  dutys: Array<Duty>;

  constructor(options: {depId: string, depName: string, subDep: Array<Department>, dutys: Array<Duty>}= {}) {
    this.depId = options.depId || '';
    this.depName = options.depName || '';
    this.subDep = options.subDep ;
    this.dutys = options.dutys ;
  }
}
