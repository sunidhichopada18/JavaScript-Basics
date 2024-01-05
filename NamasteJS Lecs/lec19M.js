const arr = [5,1, 3, 2, 6]

// Double = [10, 2, 6, 4, 12]

// Binary = ["101", "1", "11", "10", "110"]

function double(x){
    return 2*x
}

function binary(x){
    return x.toString(2)
}

const output = arr.map(double)
console.log(output);

const output_B = arr.map(binary)
console.log(output_B);

const output_Bi = arr.map((x) => x.toString(2)) // another method
console.log(output_Bi)

