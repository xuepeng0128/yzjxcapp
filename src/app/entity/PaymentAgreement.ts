export class PaymentAgreement {
   paymentAgreementId: number;
   paymentAgreementName: string;
   memo: string;

  constructor(paymentAgreementId: number, paymentAgreementName: string, memo: string) {
    this.paymentAgreementId = paymentAgreementId;
    this.paymentAgreementName = paymentAgreementName;
    this.memo = memo;
  }
}
