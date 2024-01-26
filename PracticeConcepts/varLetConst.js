/* 1. var

in var basically it can be reassigned and redeclared and also it gets replaced with the 
    with the latest var used eg:-
*/
console.log(i)
var i = 10;
var z = function add(){
    var i =  15 + 10
    return i
}

console.log(z())

/*
let: it is function scoped and we cannot redeclare the same variable.
*/
//console.log(numArr)// cannot access numArr before initialization, this is called hoisting
let numArr = [1,2,3,4];
console.log(numArr)
numArr = [1,2,3,4,5];
console.log(numArr)

/*
const: it cannot be reassigned as well as redeclared
*/
const numArr1 = [1,2,3,4];
console.log(numArr1)
numArr1[2] = 34;
console.log(numArr1)




