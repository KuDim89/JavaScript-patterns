/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 3.Behavioral_Patterns/7.State/index.ts
 */

import { MusicPlayer, PausedState, PlayingState, StoppedState } from './state';


const musicPlayer = new MusicPlayer(new StoppedState());

musicPlayer.request();

musicPlayer.transitionTo(new PlayingState());
musicPlayer.request();

musicPlayer.transitionTo(new PausedState());
musicPlayer.request();