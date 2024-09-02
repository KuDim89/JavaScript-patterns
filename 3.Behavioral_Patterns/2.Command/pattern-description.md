# Pattern Command 👨‍👦

> **Command** - is a behavioral design pattern  that turns a request into a stand-alone object that contains all 
> information about the request. This transformation lets you pass requests as a method arguments, delay or queue a 
> request’s execution, and support undoable operations.

![comand structure](../../assets/command-structure.png)

**Pattern implementation steps :**

1. Create Command interface with methods for create concrete classes.
2. Create senders classes and implement methods from Command interface.
3. Create receivers class that will have a state (history and value). Inside this class implements methods for execute command,
   logging and change history.  
4. The client should initialize objects in the following order
    - Create receivers.
    - Create commands, and associate them with receivers if needed.
    - Create senders, and associate them with specific commands.

**Pros and cons :**

👍 - Single Responsibility Principle. You can decouple classes that invoke operations from classes that perform these 
operations.\
👍 - Open/Closed Principle. You can introduce new commands into the app without breaking existing client code.\
👍 - You can implement undo/redo.\
👍 - You can implement deferred execution of operations.\
👍 - You can assemble a set of simple commands into a complex one.

👎 - The code may become more complicated since you’re introducing a whole new layer between senders and receivers.
