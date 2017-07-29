var x = 10;
console.log(x)

var a = {}
a.name = "raj"
a.age = 23;
console.log(a)

function add(a,b) {
    return a + b;
    
}

var mul = function (){
    return arguments[0] *arguments[1]
}
console.log(add(2,3))

console.log(0 == '')
console.log(0 === '')

console.log(add.call({},2,3))
console.log(mul.call({},2,2))



var det = {
    a : 10,
    distance : function dist(x,y) {
    return this.x * this.x + this.y * this.y;
}
}

