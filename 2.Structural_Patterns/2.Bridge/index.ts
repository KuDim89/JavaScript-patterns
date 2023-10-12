/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 2.Structural_Patterns/2.Bridge/index.ts
 */

import {AndroidUI, IPhoneUI, MobileBackend, UI, WebBackend, WebUI} from "./bridge";

function clientCode(abstraction: UI) {
  console.log(abstraction.render());
}

const mobileBackend = new MobileBackend();

const iphoneUI = new IPhoneUI(mobileBackend);
clientCode(iphoneUI);

const androidUI = new AndroidUI(mobileBackend);
clientCode(androidUI);

const webBackend = new WebBackend();
const webUI = new WebUI(webBackend);
clientCode(webUI);

const androidBrowserUI = new AndroidUI(webBackend);
clientCode(androidBrowserUI);