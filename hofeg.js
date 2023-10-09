/*
var names=['Abhishek','Karan','Divya','Priya','Puneet']

names.forEach(function(value,index){
    console.log(index,value)
})

names.sort()
names.reverse()

names.forEach(function(value,index){
    console.log(index,value)
})
*/

var nums=[1,3,6,8,5]

// function total(a,b){
//     return a+b;
// }
var sum=nums.reduce(function(a,b){
    return a+b;
})
console.log(sum)
// function transform(v){
//     return v*v;
// }
// var res=nums.map(transform)
// console.log(nums)
// console.log(res)

// var res=nums.map(function(v){
//     return v*v;
// })
// console.log(nums)
// console.log(res)

// var res=nums.filter(function(v){
//     return v%2!=0;
// })
// console.log(nums)
// console.log(res)

/*function order(a,b){
    return a-b;
}*/
/*
nums.sort(function order(a,b){
    return a-b;
})

nums.forEach(function(v){console.log(v)})
*/
