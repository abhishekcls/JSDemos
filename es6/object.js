/*
Comparing objects
object is ref type
*/
const emp={"eid":101,ename:'Abhishek'}
// var emp2={"eid":101,ename:'Abhishek'}

// console.log(emp)
// console.log(emp.eid,emp.ename)
// console.log(emp["eid"],emp["ename"])//recommended

// console.log(emp==emp2)//comparing address/refs
// //false

// console.log(JSON.stringify(emp)==JSON.stringify(emp2))//comparing strings
// //true

// var emp3={
//     eid:101,
//     ename:'Abhishek',
//     married:false,
//     hobbies:['read','write','play'],
//     details:function(){
//         console.log('details of '+this.ename)
//     }
// }
// console.log(emp3)
// emp3.details()

// var n1=new Number(100)//number object
// var n2=100//number var
// var n3=100//number var
// var n4=new Number(100)//number object
// console.log(n1,typeof(n1))
// console.log(n2,typeof(n2))
// console.log(n3,typeof(n3))

// console.log("n2==n3",n2==n3)//true checks value only
// console.log("n2===n3",n2===n3)//true checks value and datatype

// console.log("n1==n2",n1==n2)//true
// console.log("n1===n2",n1===n2)//false

// console.log("n1==n4",n1==n4)//false
// console.log("n1===n4",n1===n4)//false

// console.log("n1==n4",n1==n4)//false
// console.log("parseInt(n1)==parseInt(n4)",parseInt(n1)==parseInt(n4))//true
// console.log(typeof parseInt(n1),typeof n1)

/*
for..in loop
*/
// console.log(emp)
// for(var p in emp){
//     console.log(p,emp[p])
// }
/*
Object() constructor
*/
var o = new Object();
o.age = 42;
console.log(o); //{ age: 42 }

var o2=new Object(true)
//var o2=new Boolean(true)
console.log(o2)