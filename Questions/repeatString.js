function repeatStringNumTimes(str, num) {
    if(num <= 0){
      return "";
    }
    console.log(str + repeatStringNumTimes(str, num - 1));
  }
  
  repeatStringNumTimes("abc", 3);