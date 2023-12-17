// function a(){
//     console.log(b)
// }
// var b = 10
// a()
// it prints 10, somehow it access b whcih is outside the function

// function a(){
//     c()
//     function c(){
//         console.log(b)
//     }
// }
// var b = 15
// a()
// it prints 15

// function a(){
//     var b = 10;
//     function c(){

//     }
// }
// a()
// console.log(b)
// error  in output

function a(){
    var b = 5
    c()
    function c(){
        var abcd = 10
        console.log(b)
    }
}
a()
console.log(abcd);




