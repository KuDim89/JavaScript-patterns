# Pattern Singleton 🚶

> **Singleton** - refers to creational design patterns family.This pattern. This template ensures that the class has 
> only one instance and provides a global access point to it.

**Pattern structure :**

![singleton structure](../../assets/singleton-structure.png)

**Pattern implementation steps :**

1. Create singleton class.
2. Define the constructor is private to prevent direct construction calls with the `new` operator. 
3. Inside class define method which will be return exist class instance or create new one.

**Pros and cons :**

👍 - Guarantee existing only one class instance.\
👍 - Provides a global access point to it.\
👍 - The singleton object is initialized only when it’s requested for the first time.

👎 - Violates the Single Responsibility Principle. The pattern solves two problems at the time.\
👎 - The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.\
👎 - The pattern requires special treatment in a multithreaded environment so that multiple threads won’t create a singleton object several times.\
👎 - It may be difficult to unit test the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects. Since the constructor of the singleton class is private and overriding static methods is impossible in most languages, you will need to think of a creative way to mock the singleton. Or just don’t write the tests. Or don’t use the Singleton pattern.