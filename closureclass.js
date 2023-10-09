var c1=(function() {
    var a=100
    function c1() {
        console.log("cons",a)
        this.a=200
    }
    c1.prototype.disp = function () { 
        console.log("disp",a,this.a)
    };
    c1.prototype.show = function () {
        console.log("show",a,this.a)
    };
    return c1;
})();

var c=new c1();//object
c.disp()
c.show()
console.log(c.a)
console.log(typeof(c))//object
console.log(c)