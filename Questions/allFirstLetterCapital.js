function titleCase(str) {
    let splitStr = str.split(" ")
    let upperCase = "";
    let remaining = ""
    //console.log(splitStr)
    let allStr = ""
    let finalStr = ""
    
    for(let i = 0; i < splitStr.length; i++){
        upperCase = splitStr[i].charAt(0).toUpperCase();
        remaining = splitStr[i].slice(1).toLowerCase();
        allStr = upperCase + remaining + " ";
        finalStr = finalStr + allStr  
    }
    return finalStr.toString().trim();
}

console.log(titleCase("I'm a little tea pot"));