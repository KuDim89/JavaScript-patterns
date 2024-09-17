import { DiscountVisitor, Product } from './types';


export class Electronics implements Product {
  public price: number;

  constructor(price: number) {
    this.price = price;
  }

  accept(visitor: DiscountVisitor): void {
    return visitor.visitElectronics(this);
  }
}

export class Clothing implements Product {
  public price: number;

  constructor(price: number) {
    this.price = price;
  }

  accept(visitor: DiscountVisitor): void {
    return visitor.visitClothing(this);
  }
}

export class HolidayDiscount implements DiscountVisitor {
  visitElectronics(electronics: Electronics): void {
    console.log(`Electronics Price during Holiday Sale 10% discount - ${electronics.price * 0.9}$`) ;
  }
  visitClothing(clothing: Clothing): void {
    console.log(`Clothing Price during Holiday Sale 20% discount - ${clothing.price * 0.8}$`);
  }
}

export class ClearanceSale implements DiscountVisitor {
  visitElectronics(electronics: Electronics): void {
    console.log(`Electronics Price during Clearance Sale 30% discount - ${electronics.price * 0.7}$`) ;
  }

  visitClothing(clothing: Clothing): void {
    console.log(`Clothing Price during Clearance Sale 50% discount - ${clothing.price * 0.5}$`);
  }
}

