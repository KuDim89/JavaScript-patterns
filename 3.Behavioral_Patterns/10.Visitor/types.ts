import { Clothing, Electronics } from './visitor';


export interface Product {
  accept(visitor: DiscountVisitor): void;
}

export interface DiscountVisitor {
  visitElectronics(electronics: Electronics): void;
  visitClothing(clothing: Clothing): void;
}