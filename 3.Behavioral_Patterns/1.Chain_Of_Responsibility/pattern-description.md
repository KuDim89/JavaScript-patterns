# Pattern Chain of Responsibility ⛓️️

> **Chain of Responsibility** - is a behavioral design pattern that lets you pass requests along a chain of handlers. 
> Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the 
> chain.

![chain of responsibility structure](../../assets/chain-of-responsibility-structure.png)

**Pattern implementation steps :**

1. Create interface for AbstractHandler class. The Handler interface declares a method for building the chain of
   handlers. It also declares a method for executing a request.
2. Create AbstractHandler class for create objects that class implement interface above. The default chaining behavior
   can be implemented inside a base handler class.
3. Create concrete handlers all of them either handle a request or pass it to the next handler in the chain.
4. Crete client code function. The client code is usually suited to work with a single handler. In most cases, it is not
   even aware that the handler is part of a chain.
5. Construct the actual chain. The client should be able to send a request to any handler, not just the
* first one in the chain.

**Pros and cons :**

👍 - You can control the order of request handling.\
👍 - Single Responsibility Principle. You can decouple classes that invoke operations from classes that perform operations.\
👍 - Open/Closed Principle. You can introduce new handlers into the app without breaking the existing client code.

👎 - Some requests may end up unhandled.
