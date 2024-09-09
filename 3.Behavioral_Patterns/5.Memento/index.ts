/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 3.Behavioral_Patterns/5.Memento/index.ts
 */

import { Editor, TextArea } from './memento';


const textArea = new TextArea('Simple value');
const editor = new Editor(textArea);
editor.backup();

textArea.addText('1 value');
editor.backup();

textArea.addText('2 value');
editor.backup();

editor.showHistory()

editor.undo();
editor.undo();

editor.showHistory();