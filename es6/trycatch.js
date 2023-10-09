try{
    const m=10/0;//Infinity
    m=100//TypeError
    //eval("console.log(')")//SyntaxError
    //console.log(m)//ReferenceError
    //let s="abc"
    //console.log(s,typeof s)
    //let n=Number(s)//NaN
    //console.log(n,typeof n)
    console.log(m,typeof m)
    //m.toUpperCase()//TypeError
    //console.log(s,typeof s)
    //throw('My error demo')
}
catch(e){
    //console.log(e)
    console.error(e.name,':',e.message)
}