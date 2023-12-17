// function x(){
//     var i = 1
//     setTimeout(function(){
//         console.log(i);
//     },3000)
//     console.log("Namaste JavaScript");
// }
// x()

// function x(){
//     for(var i = 1; i <= 5; i++){ // use let function
//         console.log(i);
//         setTimeout(function(){
//             console.log(i)
//         }, i * 1000)
//     }
//     console.log("Hello");
// }
// x()

function x(){
    for(var i = 1; i <= 5; i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            }, i*1000)
        }
        close(i)
    }
    console.log("Namaste JavaScript")
}
x()
