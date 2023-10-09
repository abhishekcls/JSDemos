//first class function
function callback(){
    console.log('callback demo')
}

function hof(fx){
    console.log('hof')
    fx()
}

hof(callback)

function msg(nm){
    console.log('Welcome '+nm)
}
function greet(n,f){//hof
    f(n)
}

greet('Abhishek',msg)
