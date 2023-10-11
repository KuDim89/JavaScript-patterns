# Pattern Adapter 🅰️

> **Adapter or Wrapper** - is a structural design pattern that allows objects with incompatible interfaces to 
> collaborate.

![adapter structure](../../assets/adapter-structure.png)

**Pattern implementation steps :**

1. Create two different interfaces for target and adaptee classes.
2. Create two target and adaptee classes implements different interfaces. 
3. Create an adapter class that will implement the target interface and receive an object of type adaptee in the constructor.
4. One by one, implement all methods of the target interface in the adapter class.

**Pros and cons :**

👍 - Single Responsibility Principle. You can separate the interface or data conversion code from the primary business 
logic of the program.\
👍 - Open/Closed Principle. You can introduce new types of adapters into the program without breaking the existing 
client code, as long as they work with the adapters through the client interface.

👎 - Complicates the program code by introducing additional classes.\
