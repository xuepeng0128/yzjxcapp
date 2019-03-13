import {SupClass} from './SupClass';
import {Blank} from './Blank';

export class Supplier {
  supId: string;
  supName: string;
  pinyin: string;
  supClass: SupClass;
  linkMan: string;
  linkTel1: string;
  linkTel2: string;
  accountNo: string;
  taxNo: string;
  address: string;
  blank: Blank;
  memo: string;


  constructor(options: {supId?: string, supName?: string, pinyin?: string, supClass?: SupClass,
                       linkMan?: string, linkTel1?: string, linkTel2?: string, accountNo?: string,
                         taxNo?: string, address?: string, blank?: Blank, memo?: string}= {}) {
    this.supId = options.supId || '';
    this.supName = options.supName || '';
    this.pinyin = options.pinyin || '';
    this.supClass = options.supClass ;
    this.linkMan = options.linkMan || '';
    this.linkTel1 = options.linkTel1 || '';
    this.linkTel2 = options.linkTel2 || '';
    this.accountNo = options.accountNo || '';
    this.taxNo = options.taxNo || '';
    this.address = options.address || '';
    this.blank = options.blank ;
    this.memo = options.memo || '';
  }
}
