/*
function add(a,b){
    //console.log(a+b);
    return a+b
}

//var r=add(1,4)
console.log(add(1,4))
*/

function add(a){
    return function(b){
        console.log(a+b)
    }
}

var inner=add(10)
inner(20)

add(2)(3)//currying
