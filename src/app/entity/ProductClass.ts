export class ProductClass {
  productClassId: string;
  productClassName: string;
  subProductClass: ProductClass ;

  constructor(productClassId: string, productClassName: string,  subProductClass: ProductClass) {
    this.productClassId = productClassId;
    this.productClassName = productClassName;
    this.subProductClass = subProductClass;
  }
}
