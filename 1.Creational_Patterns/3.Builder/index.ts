/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 1.Creational_Patterns/3.Builder/index.ts
 */

import {BunTypes, CutletTypes, EggTypes, SeafoodsTypes} from "./types";
import {BurgerBuilder, Director} from "./builder";

function clientCode(director: Director) {
  const builder = new BurgerBuilder();
  director.setBuilder(builder);

  console.log('BURGER MAX');
  director.buildBurgerMax();
  builder.getProduct().ingredientsList();

  console.log('VEGAN BURGER');
  director.buildVeganBurger();
  builder.getProduct().ingredientsList();

  console.log('CUSTOM BURGER');
  builder.addBun(BunTypes.wheat);
  builder.addCutlet(CutletTypes.beef);
  builder.addEgg(EggTypes.boiled);
  builder.addSeafoods([
    SeafoodsTypes.crab,
    SeafoodsTypes.lobster,
    SeafoodsTypes.shrimp,
    SeafoodsTypes.salmon,
  ])
  builder.addDoubleCheese();
  builder.getProduct().ingredientsList();
}

const director = new Director();
clientCode(director);