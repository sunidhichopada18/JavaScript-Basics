function mutation(arr) {
    let arr1 = arr[0].toLowerCase().split("");
    let arr2 = arr[1].toLowerCase().split("");
    for(let i = 0; i < arr2.length; i++){
        if(!(arr1.includes(arr2[i]))){
            return false;
        }
    }
    return true;
}
console.log(mutation(["hello", "hey"]));