class Demo{
    n;
    constructor(n){
        this.n=n
        this.demo='JS'
        console.log("constructor")
    }
    disp(){
        console.log("Hello ",this.n,this.demo)
    }
}

let obj=new Demo("Abhishek");
obj.disp()

let obj2=new Demo("Lalit");
obj2.disp()