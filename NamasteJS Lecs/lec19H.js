const users = [
    { firstName: "Akshay", lastName: "Saini", age: 26},
    { firstName: "Sunidhi", lastName: "Chopada", age: 21},
    { firstName: "Dimple", lastName: "Sharma", age: 30},
    { firstName: "Mini", lastName: "Racho", age: 26}
]

// list of full names --> using map
const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output)

// acc = {26: 2, 21: 1, 30: 1} --> using reduce
const output_R = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }else{
        acc[curr.age] = 1
    }
    return acc
}, {})
console.log(output_R)

//first name of all the people whose age is less than 30 --> filter

const output_F = users.filter((x) => x.age < 30).map((x) => x.firstName)
// this is called chaining using filter and map
console.log(output_F);