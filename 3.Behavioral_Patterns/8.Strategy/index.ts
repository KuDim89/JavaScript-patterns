/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 3.Behavioral_Patterns/8.Strategy/index.ts
 */
import { FedExStrategy, NovaPostStrategy, OwnDeliveryStrategy, ShippingCostCalculator } from './strategy';


const ownDeliveryStrategy = new OwnDeliveryStrategy();
const fedExStrategy = new FedExStrategy();
const novaPostStrategy = new NovaPostStrategy();

const calculator = new ShippingCostCalculator(ownDeliveryStrategy);
calculator.calculateCost(10, 100);

calculator.setStrategy(fedExStrategy);
calculator.calculateCost(10, 100);

calculator.setStrategy(novaPostStrategy);
calculator.calculateCost(10, 100);
