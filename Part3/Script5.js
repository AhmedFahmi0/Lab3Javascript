var person = { "firstName": "Ahmed", "lastName": "Fahmi", "id": "3", "age": "27" };
var personKeys = Object.keys(person);
//Returns an array containing the names of all of the given object's own enumerable string properties.
console.log(personKeys);
var newPerson = { "firstName": "Omar", "lastName": "Fahmi", "id": "3", "age": "27" };
newPerson = Object.assign({ city: "Alex" }, person);
//Copies the values of all enumerable own properties from one or more source objects to a target object
console.log(newPerson);
var personValues = Object.values(person);
//Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
console.log(personValues);
var child = Object.create(person);
//Creates a new object with the specified prototype object and properties
child.firstName = "Ali";
child.lastName = "Mahmoud";
child.age = "8";
child.hairColor = "brown";
console.log(child);
Object.defineProperty(person, "height", { value: "1.8 m" });
//Adds the named property described by a given descriptor to an object
console.log(person);
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
//Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties
console.log(Object.is(person, child));
//Compares if two objects are the same value
Object.freeze(person);//Freezes an object. Other code cannot delete or change its properties.
person.age = "30";
console.log(person.age);
console.log(Object.isFrozen(person));//Determines if an object was frozen.

Object.seal(child);//Prevents other code from deleting properties of an object
child.hairColor = "black";
console.log(child.hairColor);
delete child.hairColor;
console.log(child.hairColor);








