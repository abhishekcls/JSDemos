let array=[111,'Abhishek',2,9]

/*
let id=array[0];
let name=array[1];
*/
//array destructuring
//let [id,n]=array;//destructuring
//console.log(id,n)

let [id,n,...rest]=array;//destructuring
console.log(id,n)
console.log(rest)

//... spread/rest operator

let copy=[...array]//copy
console.log(array)
console.log(copy)

//object destructuring
const emp={eid:101,ename:'Abhishek',nationality:'Indian',demo:'es6 destruturing'}

let {eid,ename,...left}=emp;
console.log(eid,ename,left)