 const arr = [5, 1, 3, 2, 6]

function isOdd(x){
    return x % 2
}
function isGreaterThan(x){
    return x > 4
}

const output_I = arr.filter((x) => x > 4) // another method
console.log(output_I);

 const output = arr.filter(isOdd)
 const output_G = arr.filter(isGreaterThan)
 console.log(output);
 console.log(output_G);