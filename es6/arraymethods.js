//length property

var arr1=[1,2,3]

var arr2=['abc','xyz']
console.log('----length property------')
console.log(arr1.length,arr2.length)
/*
array methods
*/
//join -> joins all array elements into a string with a specified separator

var names=['Abhishek','Karan','Divya','Priya','Puneet']

console.log('----join------')
console.log(names.join(' : '))

//push -> adds a new element at the end to an array
console.log('----push------')
names.push('Deepak')
console.log(names)

console.log('----push alternative------')
names[names.length]='Ravi'
console.log(names)

//pop -> removes the last element from an array
console.log('----pop------')
console.log(names.pop());
console.log(names)

//shift -> removes the first element of an array
console.log('----shift------')
console.log(names.shift());
console.log(names)

//unshift -> adds new elements to the beginning of an array
console.log('----unshift------')
names.unshift("Abhishek")
console.log(names)

//concat -> creates a new array by merging (concatenating) existing arrays
console.log('----concat array------')
var res=names.concat(arr2)
console.log(res)

console.log('----concat value------')
var res2=names.concat('Gaurav')
console.log(res2)
/*
splice -> can be used to add or remove items of an array
The first parameter defines the position where new elements should be added (spliced in).
The second parameter defines how many elements should be removed.
The rest of the parameters define the new elements to be added.
*/
//add
console.log('----splice add------')
var del=names.splice(2,0,'Jatin','Lalit')
console.log(del);
console.log(names);
//delete
console.log('----splice delete------')
del=names.splice(2,2)
console.log(del);
console.log(names);
//replace
console.log('----splice replace------')
del=names.splice(2,2,'Harish')
console.log(del);
console.log(names);

//slice -> slices out a piece of an array into a new array
console.log('----slice------')
var subarray=names.slice(2);
console.log(subarray);
console.log(names);

//sort -> sorts an array in ascending order
console.log('----sort------')
names.sort();
console.log(names);
//reverse -> reverses the elements in an array
console.log('----reverse------')
names.reverse();
console.log(names);
