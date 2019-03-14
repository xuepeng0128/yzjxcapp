import {Supplier} from './Supplier';
import {User} from './User';
import {PaymentAgreement} from './PaymentAgreement';
import {OrderBillDetail} from './OrderBillDetail';

export class OrderBill {
    orderId: string;
    orderDate: string;
    supplier:  Supplier;
    paymentAgreement:  PaymentAgreement ;
    taxRate: number ;
    otherAgreement:  PaymentAgreement ;
    memo: string;
    makeBillMan: User;
    makeTime: Date;
    details: Array<OrderBillDetail> ;

  constructor(orderId: string, orderDate: string, supplier: Supplier, paymentAgreement: PaymentAgreement, taxRate: number, otherAgreement: PaymentAgreement, memo: string, makeBillMan: User, makeTime: Date, details: Array<OrderBillDetail>) {
    this.orderId = orderId;
    this.orderDate = orderDate;
    this.supplier = supplier;
    this.paymentAgreement = paymentAgreement;
    this.taxRate = taxRate;
    this.otherAgreement = otherAgreement;
    this.memo = memo;
    this.makeBillMan = makeBillMan;
    this.makeTime = makeTime;
    this.details = details;
  }
}
