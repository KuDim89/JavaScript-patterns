/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 3.Behavioral_Patterns/10.Visitor/index.ts
 */

import { ClearanceSale, Clothing, Electronics, HolidayDiscount } from './visitor';


const laptop = new Electronics(100);
const shirt = new Clothing(50);

const holidayDiscount = new HolidayDiscount();
laptop.accept(holidayDiscount);
shirt.accept(holidayDiscount);

const clearanceSale = new ClearanceSale();
laptop.accept(clearanceSale);
shirt.accept(clearanceSale);
