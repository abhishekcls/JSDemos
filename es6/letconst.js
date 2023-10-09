let a=100;//global

function scope(){
    let b=200;//function
    //hoisting
    if(true){
        console.log(c)
        const c=300;//block
        console.log(a,b,c)
    }
   // console.log(a,b,c)//error: not defined
}

scope()

/*
let/const allows block scope
let/const does not allow hoisting
*/