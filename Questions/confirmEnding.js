function confirmEnding(str, target) {
    let splitArr = str.split("");
    let splitTar = target.split("")
    let finalArr = []
    let tarLen = target.length;
    for(let i = splitArr.length - tarLen; i < splitArr.length; i++){
        finalArr.push(splitArr[i]);
    }
    console.log(splitTar);
    console.log(tarLen);
    console.log(finalArr);
    console.log(JSON.stringify(finalArr) === JSON.stringify(splitTar));
    
}
   
confirmEnding("Congratulations", "ons");