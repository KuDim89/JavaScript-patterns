# Pattern Mediator 🤝

> **Mediator** - is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern 
> restricts direct communications between the objects and forces them to collaborate only via a mediator object.

![mediator structure](../../assets/mediator-structure.png)

**Pattern implementation steps :**

1. Identify a group of tightly coupled classes which would benefit from being more independent (e.g., for easier 
   maintenance or simpler reuse of these classes).
2. Declare the mediator interface and describe the desired communication protocol between mediators and various 
   components. In most cases, a single method for receiving notifications from components is sufficient.
3. Implement the concrete mediator class. Consider storing references to all components inside the mediator. This way, 
   you could call any component from the mediator’s methods.
4. You can go even further and make the mediator responsible for the creation and destruction of component objects. 
   After this, the mediator may resemble a factory or a facade.
5. Components should store a reference to the mediator object. The connection is usually established in the component’s 
   constructor, where a mediator object is passed as an argument.
6. Components should store a reference to the mediator object. The connection is usually established in the component’s 
   constructor, where a mediator object is passed as an argument.

**Pros and cons :**

👍 - Single Responsibility Principle. You can extract the communications between various components into a single 
     place, making it easier to comprehend and maintain.\
👍 - Open/Closed Principle. You can introduce new mediators without having to change the actual components.\
👍 - You can reduce coupling between various components of a program.\
👍 - You can reuse individual components more easily.

👎 - Over time a mediator can evolve into a God Object.