// Variable function with arrow function

const magic = () => new Date();
const a = magic()
console.log(a)

// self invoking anonomous function saving the return value to variable 

const magic1 = function(){
    return new Date();
}()
console.log(magic1)

// Normal function

function magic2(){
    return new Date();
}
const b = magic2();
console.log(b)

// Normal variable function

const magic3 = function(){
    return new Date();
}
console.log(magic3())

//function with arguments

function add(a,b){
    return a+ b;
}
console.log(add(2,3))

