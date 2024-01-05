function truncateString(str, num) {
    let strSplit = str.split("");
    let finalArr = []
    let finalStr = "";
    if(num >= str.length){
      return str;
    }
    for(let i = 0; i < num; i++){
      finalArr.push(strSplit[i]);
    }
      console.log(finalArr)
    
    finalStr = finalArr.join("").trim();
    console.log(finalStr)
    return (finalStr + '...')
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
  
  // this was sacchi diffiult
  