const radius = [3, 1,2,4]

const area = function (radius){
    return Math.PI * radius * radius
}

const circumference = function(radius){
    return Math.PI*radius*2
}

const diameter = function(radius){
    return radius * 2
}

const calculate = function (radius, logic){
// Array.prototype.calculate = function(logic)
    const output = []
    for (let i = 0;i < radius.length; i++){
                    // this.length
        output.push(logic(radius[i]))
        //output.push(logic(this[i]))
    }
    return output
}
//the above code is the small implementation of the map function

console.log(calculate(radius, area));
// console.log(radius.calculate(area))

/*
to make calculate work like map we can check line 16
and then we can console log it as
console.log(radius.calculate(radius,area))
also to make it one argument we do it like
check lines 16, 19 and 20, this refers to the 
array off radius

*/
console.log(calculate(radius, circumference));
console.log(calculate(radius,diameter));

console.log(radius.map(area))
// reusability, modularity
// pure fuctions, complex function
// all these are the benefits of functional programming