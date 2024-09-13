/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 3.Behavioral_Patterns/9.Template_Method/index.ts
 */

import { BMWBuilder, DefaultBuilder, TeslaBuilder } from './template-method';


const chery = new DefaultBuilder();
chery.buildTemplate();

const bmw = new BMWBuilder();
bmw.buildTemplate();

const tesla = new TeslaBuilder();
tesla.buildTemplate();