export class PaymentMethod {
  paymentMethodId: number;
  paymentMethodName: string;
  memo: string;

  constructor(paymentMethodId: number, paymentMethodName: string, memo: string) {
    this.paymentMethodId = paymentMethodId;
    this.paymentMethodName = paymentMethodName;
    this.memo = memo;
  }
}
