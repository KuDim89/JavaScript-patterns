/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 2.Structural_Patterns/7.Proxy/index.ts
 */

import {IWebApp} from "./types";
import {Security, WebApp} from "./proxy";

function clientCode(app: IWebApp, password?: string) {
  password
    ? app.request(password)
    : app.request("")
}

const mySimpleRequest = new WebApp();

console.log('Simple request:')
clientCode(mySimpleRequest)

const mySecurityRequest = new Security(new WebApp());

console.log('Working with correct password:')
clientCode(mySecurityRequest, 'qwerty123')

console.log('Working with wrong password:')
clientCode(mySecurityRequest, '1111')





