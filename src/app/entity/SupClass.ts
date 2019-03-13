import {FormControl} from '@angular/forms';

export class SupClass {
  supClassId: string ;
  supClassName: string ;
  memo: string;
  subSupClass: SupClass ;


  constructor(options: {supClassId?: string, supClassName?: string, memo?: string, subSupClass?: SupClass}= {}) {
    this.supClassId = options.supClassId || '';
    this.supClassName = options.supClassName || '';
    this.memo = options.memo || '';
    this.subSupClass = options.subSupClass ;
  }
}
