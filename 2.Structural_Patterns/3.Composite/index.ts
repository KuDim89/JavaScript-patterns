/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 2.Structural_Patterns/3.Composite/index.ts
 */
import {Component, Detail, Group} from "./composite";

function clientCode(component: Component) {
  console.log(`Result: ${component.getPrice()} UAN`)
  console.log(`All components which I use:\n${component.getAllComponents()}`)
}

const storeDrone = new Detail('drone', 60000);
console.log('I\'ve bought drone in the store:');
clientCode(storeDrone);
console.log('')


const customDrone = new Group();

const flightController  = new Group();
flightController.add(new Detail('gyroscope', 2100));
flightController.add(new Detail('accelerometer', 3250));
flightController.add(new Detail('barometer', 1130));
flightController.add(new Detail('bluetooth', 1150));
flightController.add(new Detail('wi-fi module', 2250));
flightController.add(new Detail('FC board', 1350));

const electronicSpeedControl = new Group();
electronicSpeedControl.add(new Detail('battery', 1350));
electronicSpeedControl.add(new Detail('FSC board', 2200));

const rxReceiver = new Group();
rxReceiver.add(new Detail('antenna', 1200));
rxReceiver.add(new Detail('RX board', 2300));

const videoTransmitter = new Group();
videoTransmitter.add(new Detail('antenna', 1300))
videoTransmitter.add(new Detail('VTX board', 2500))

const electricEngine = new Detail('electric engine', 3500, 4);
const camera = new Detail('camera', 3500);
const propeller = new Detail('propeller', 1800, 4);
const frame = new Detail('frame', 1500);
const buzzer  = new Detail('buzzer', 1800);
const GPSModule  = new Detail('GPS module', 2900);

customDrone.add(flightController);
customDrone.add(electronicSpeedControl);
customDrone.add(rxReceiver);
customDrone.add(videoTransmitter);
customDrone.add(electricEngine);
customDrone.add(camera);
customDrone.add(propeller);
customDrone.add(frame);
customDrone.add(buzzer);
customDrone.add(GPSModule);

console.log('I constructed drone use different components');
clientCode(customDrone);
console.log('')

console.log('GPSModule parent:', GPSModule.getParent());
console.log('Is GPSModule composite? ', GPSModule.isComposite());
console.log('Is customDrone composite?', customDrone.isComposite());