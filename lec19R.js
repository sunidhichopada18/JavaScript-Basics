const arr = [5, 1, 3, 2, 6]

// sum or max

function findSum(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}

console.log(findSum(arr))

const output = arr.reduce(function(acc, curr){
    acc = acc + curr
    return acc
}, 0)
console.log(output)

// acc is called accumulator which acts like sum
// curr is called current which acts like arr[i]

/* Like we intialize sum with 0, then here
we write , 0 after the function ends
*/ 

// max

function findMax(arr){
    let max=0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
console.log(findMax(arr));

const output_M = arr.reduce(function (acc, curr){
    if(curr>acc){
        acc = curr
    }
    return acc

},0)
console.log(output_M)