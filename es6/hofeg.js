
var names=['Abhishek','Karan','Divya','Priya','Puneet']
console.log("Arrow Fuctions")
names.forEach((value,index)=>console.log(index,value))

names.sort()
names.reverse()

names.forEach((value,index)=>console.log(index,value))

var nums=[1,3,6,8,5]

// function total(a,b){
//     return a+b;
// }
var sum=nums.reduce((a,b)=>a+b)
console.log(sum)
// function transform(v){
//     return v*v;
// }
// var res=nums.map(transform)
// console.log(nums)
// console.log(res)

var res=nums.map(v=>v*v)
console.log(nums)
console.log(res)

var res=nums.filter(v=>v%2!=0)
console.log(nums)
console.log(res)

/*function order(a,b){
    return a-b;
}*/
nums.sort((a,b)=>a-b)

nums.forEach(v=>console.log(v))

