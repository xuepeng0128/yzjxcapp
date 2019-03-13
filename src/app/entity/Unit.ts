import {FormControl} from '@angular/forms';

export class Unit {
  unitId: string ;
  unitName: string ;
  memo:    string ;

  constructor(unitId: string, unitName: string, memo: string) {
    this.unitId = unitId;
    this.unitName = unitName;
    this.memo = memo;
  }
}
