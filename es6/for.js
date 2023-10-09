/*
for(var i=5;i>=1;i--)
{
    console.log(i)
}
*/
/*
console.log('odd')
for(i=1;i<=10;i+=2){
    console.log(i)
}
console.log('even')
for(i=2;i<=10;i+=2){
    console.log(i)
}
*/

for(let i=1;i<=3;i++){
    for(let j=4;j<=5;j++){
        console.log("i="+i+" j="+j);
    }
}

/*
*
**
***
*/

for(var i=1;i<=3;i++){
    for(var j=1;j<=i;j++){
        process.stdout.write("*");
    }
    console.log()
}

