function x(){

    function y(){
        console.log(a)
    }
    var a = 100
    return y    
}
var z = x()

z()
//console.log(z)