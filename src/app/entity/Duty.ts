export class Duty {
  dutyId: string;
  dutyName: string;
  memo: string;

  constructor(options: {dutyId?: string, dutyName?: string, memo?: string} = {}) {
    this.dutyId = options.dutyId || '';
    this.dutyName = options.dutyName || '';
    this.memo = options.memo || '';
  }
}
