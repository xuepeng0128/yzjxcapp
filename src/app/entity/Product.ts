import {ProductClass} from './ProductClass';
import {Unit} from './Unit';
import {Blank} from './Blank';

export class Product {
   productId: string;
   productName: string;
   style: string;
   productClass: ProductClass ;
   unitMain: Unit ;
   unitAssist: Unit ;
   unitMainToAssist: number;
   blank: Blank ;
   qrCode: string;
   refCase: number;
   refDiscount: number;
   refPrice: number;
   earlyStage: number;
   memo: string;

  constructor(options: {productId?: string, productName?: string,
                          style?: string, productClass?: ProductClass ,
                         unitMain?: Unit , unitAssist?: Unit , unitMainToAssist?: number
                         blank?: Blank , qrCode?: string, refCase?: number, refDiscount?: number,
                          refPrice?: number, earlyStage?: number, memo?: string}= {}) {
    this.productId = options.productId || '';
    this.productName = options.productName || '';
    this.style = options.style || '';
    this.productClass = options.productClass;
    this.unitMain = options.unitMain ;
    this.unitAssist = options.unitAssist ;
    this.unitMainToAssist = options.unitMainToAssist || 1;
    this.blank = options.blank ;
    this.qrCode = options.qrCode || '';
    this.refCase = options.refCase || 0;
    this.refDiscount = options.refDiscount || 10;
    this.refPrice = options.refPrice || 0;
    this.earlyStage = options.earlyStage || 0;
    this.memo = options.memo || '';
  }
}
