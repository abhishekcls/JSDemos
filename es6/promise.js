//Promise -> then(resolve,reject) 
//resolve-> success
//reject-> error/failure
/*
let delay=seconds=>{
    return new Promise(resolve=>{
        setTimeout(resolve, seconds*1000);
    })
}

delay(1).then(()=>console.log("Done in 1 second"));
delay(3).then(()=>console.log("Done in 3 seconds"));

console.log("This is JS Promise Demo by Abhishek Samanta")
*/
let delay=seconds=>{
    return new Promise((resolve,reject)=>{//success,failure
        if(typeof seconds !== "number"){
            reject(Error('seconds can only take numbers'))
        }
        setTimeout(()=>resolve(`${seconds} seconds completed`), seconds*1000);
    })
}

//delay("2 seconds").then(msg=>console.log(msg),err=>console.error(err.message))//Error
delay(3).then(msg=>msg.toUpperCase()).then(msg=>`${msg}!!!!!`).then(msg=>console.log(msg));

async function demo(){
    try{
        let m=await delay(2)
        console.log(m)
    }
    catch(err){
        console.error(err.message)
    }
}

demo()