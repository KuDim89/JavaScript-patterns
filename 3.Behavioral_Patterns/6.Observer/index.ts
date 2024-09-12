/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 3.Behavioral_Patterns/6.Observer/index.ts
 */

import { Blog, User } from './observer';


const blog = new Blog();

const jack = new User('Jack');
const annie = new User('Annie');

blog.addObserver(jack);
blog.addObserver(annie);

blog.notifyObservers();

blog.removeObserver(annie);

blog.notifyObservers();