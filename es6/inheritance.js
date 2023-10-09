class Parent{
    constructor(){
        console.log("P Cons")
    }
    disp(){
        console.log("Parent")
    }
}

class Child extends Parent{
    constructor(){
        super();
        console.log("C Cons")
    }
    /*disp(){
        console.log("Child disp")
    }*/
    show(){
        console.log("Child")
    }
}

let c=new Child();
c.disp()
c.show()