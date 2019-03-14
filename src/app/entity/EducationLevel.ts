export class EducationLevel {
  eduId: number;
  eduName: string;
  memo: string ;


  constructor(options: {eduId?: number, eduName?: string, memo?: string}= {}) {
    this.eduId = options.eduId ;
    this.eduName = options.eduName || '';
    this.memo = options.memo || '';
  }
}
