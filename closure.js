//Scopes in ES5
//1. global
//2. function

var g=10;//global
function outer(){
    console.log(c);//undefined //because hoisting is allowed in es5
    var c=20;//closure
    console.log(c);
    return function(){
        var f=30;
        console.log(g,c,f)
    }
}

var fx=outer();
fx()

console.log(g)
//console.log(c)//error
//console.log(f)//error