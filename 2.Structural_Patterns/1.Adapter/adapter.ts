import {Diesel, Electric} from "./types";

export class ElectricCar implements Electric {
  public useElectricEngine(): string {
    return 'I work on electricity to produce mechanical energy and do not threaten the environment with harmful emissions.'
  }
}

export class DieselCar implements Diesel {
  public useDieselEngine(): string {
    return 'I work on diesel fuel to produce mechanical energy and threaten the environment with harmful emissions.';
  }
}

/**
 * The Adapter makes the DieselCar interface compatible with the ElectricCar interface.
 */
export class ServiceAdapter implements Electric {
  private dieselCar: Diesel;

  constructor(dieselCar: Diesel) {
    this.dieselCar = dieselCar;
  }

  public useElectricEngine(): string {
    return `Adapter: An electric motor is installed. This motor has no negative impact on the environment.`;
  }
}

