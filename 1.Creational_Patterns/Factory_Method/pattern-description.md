# Pattern Factory Method 🏭

> **Factory method** - refers to creational design patterns family. It defines common interface for creation object in
> superclass. Allows us to change the type of object being created.

**Pattern structure :**

![factory method structure](../../assets/factory-method-structure.png)

**Pattern implementation steps :**

1. Create one interface for all concrete products.
2. Create base abstract class with abstract method which will be return instance of concrete product.
3. Create a class or classes depend on concrete situation which will be extended from base abstract class and implement
   abstract method.
4. Create a class or classes for concrete products which will be returned from abstract class methods.
5. Create a function which will accept type as a parameter and return instance of class.

**Pros and cons :**

👍 - Class avoid from bounding with concrete product class.\
👍 - Collect code with products in one place that simplify code support.\
👍 - Simplify adding new products in the app.\
👍 - Implements second SOLID principle - Open/Closed.

👎 - Can lead to creation of **huge parallel class hierarchies**, because for each product class need to create own 
creator subclass.