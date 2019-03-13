

export class PayKind {
     payKindId: string ;
     payKindName: string ;
     memo: string ;


  constructor(options: {payKindId?: string, payKindName?: string, memo?: string} = {}) {
    this.payKindId = options.payKindId || '';
    this.payKindName = options.payKindName || '';
    this.memo = options.memo || '';
  }
}
