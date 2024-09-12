import { ShippingStrategy } from './types';

export class OwnDeliveryStrategy implements ShippingStrategy {
  public calculateCost(weight: number, distance: number): void {
    console.log(`Own delivery shipping cost for a ${weight}kg package traveling 100km - ${weight * distance * 0.1}$.`) ;
  }
}

export class FedExStrategy implements ShippingStrategy {
  public calculateCost(weight: number, distance: number): void {
    console.log(`FedEx shipping cost for a ${weight}kg package traveling 100km - ${weight * distance * 0.2}$.`) ;
  }
}

export class NovaPostStrategy implements ShippingStrategy {
  public calculateCost(weight: number, distance: number): void {
    console.log(`Nova Post shipping cost for a ${weight}kg package traveling 100km - ${weight * distance * 0.5}$.`) ;
  }
}

export class ShippingCostCalculator {
  private shippingStrategy: ShippingStrategy;

  constructor(shippingStrategy: ShippingStrategy) {
    this.shippingStrategy = shippingStrategy;
  }

  setStrategy(shippingStrategy: ShippingStrategy) {
    this.shippingStrategy = shippingStrategy;
  }

  calculateCost(weight: number, distance: number) {
    return this.shippingStrategy.calculateCost(weight, distance)
  }
}