import {Product} from './Product';

export class OrderBillDetail {
   no: number;
   product: Product;
   num: number;
   price: number;
   detailMemo: string;


  constructor(options: {no?: number, product?: Product, num?: number, price?: number, detailMemo?: string}= {}) {
    this.no = options.no || 1;
    this.product = options.product;
    this.num = options.num || 1;
    this.price = options.price || options.product.refPrice || 0 ;
    this.detailMemo = options.detailMemo || '';
  }
}
