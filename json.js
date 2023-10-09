var emp={eid:101,ename:'Abhishek'}

console.log(emp,typeof(emp))

var str1=JSON.stringify(emp)//object into string
console.log(str1,typeof(str1))

var emp2=JSON.parse(str1)//string into object
console.log(emp2,typeof(emp2))

var arr1=[1,2,3]
console.log(arr1,typeof(arr1))

console.log(Array.isArray(emp))
console.log(Array.isArray(arr1))

/*
object

array
JSON
object
Number
String
Boolean
Date
null
*/
console.log(typeof(null))

var n1=new Number(100)
var n2=100
console.log(n1,typeof(n1))
console.log(n2,typeof(n2))

var s1=new String('abc')
var s2='abc'
console.log(s1,typeof(s1))
console.log(s2,typeof(s2))

var b1=new Boolean(true)
var b2=true
console.log(b1,typeof(b1))
console.log(b2,typeof(b2))

var d1=new Date()
console.log(d1,typeof(d1))