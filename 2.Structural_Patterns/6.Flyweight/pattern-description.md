# Pattern Flyweight ✈️

> **Facade** - is a structural design pattern that allow to fit more objects in allocated RAM. This patten economize 
memory by dividing the general state of objects among themselves instead of saving the same data in each object.

![flyweight structure](../../assets/flyweight-structure.png)

**Pattern implementation steps :**

1. Create interface for flyweight class.
2. Create flyweight class for create objects that class implement interface above.
3. Create interface for flyweight factory.
4. Crete flyweight factory implement interfaces above.
5. Inside flyweight factory we need to define array for objects caching, and method which return object depend on 
parameters which we throw into the factory method. If we have the same object in the cache we return this object else 
we create new object use flyweight class. After that we add this object in the cache and return this one.

**Pros and cons :**

👍 - Economize RAM.

👎 - Spends CPU time on searching and context calculation.\
👎 - Complicates the program code by introducing many additional classes.