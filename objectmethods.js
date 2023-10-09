/*
Object.assign() -> 
copies all enumerable own properties from one or more source objects to a target object. 
It returns the modified target object.
*/
// var target = { a: 1, b: 2 };
// var source = { b: 4, c: 5 };

// console.log(target);
// var returnedTarget = Object.assign(target, source);
// console.log(target);
// console.log(returnedTarget);
// // Expected output: Object { a: 1, b: 4, c: 5 }
// console.log(returnedTarget === target);
// // Expected output: true

// var obj = { a: 1 };
// var copy = Object.assign({}, obj);
// console.log(copy); // { a: 1 }

/*
Object.values() -> returns an array of a given object
*/
// var emp={eid:101,ename:'Abhishek'}
// console.log(emp)
// console.log(Object.values(emp))

/*
Object.freeze()
Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 
A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, 
value cannot be changed, freeze() returns the same object that was passed in.
*/
// const obj = {
// prop: 42
// };

// Object.freeze(obj);

// obj.prop = 33;
// // Throws an error in strict mode

// console.log(obj.prop);
// // Expected output: 42
// //obj.age=25;//not allowed

// console.log(obj)
// console.log(Object.isFrozen(obj))//true

/*
Object.seal()
Sealing an object prevents extensions and makes existing properties non-configurable. 
A sealed object has a fixed set of properties: new properties cannot be added, 
existing properties cannot be removed. Values of existing properties can still be changed as long as 
they are writable. seal() returns the same object that was passed in.
*/
const object1 = {
property1: 42
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// Expected output: 33

delete object1.property1; // Cannot delete when sealed
console.log(object1.property1);

object1.age=27;
console.log(object1)
// Expected output: 33

console.log(Object.isSealed(object1))