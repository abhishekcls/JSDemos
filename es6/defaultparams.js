function add(a,b,c=0){
    console.log(a,b,c)
    console.log(a+b+c)
}

add(2,3)
add(4,5,6)

function total(...args){
    let t=0;
    for(let a of args){
        t+=a;
    }
    console.log("total=",t);
}

arr=[1,5,7]
total(1,2)
total(2,3,4)
total(1,2,3,4,...arr)