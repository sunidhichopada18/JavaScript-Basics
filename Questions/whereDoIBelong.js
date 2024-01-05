function getIndexToIns(arr, num) {
    let arr1 = arr.sort((a,b) => a-b);
    console.log(arr1);
      if(arr.length === 0){
          return 0;
      }else if(num < arr1[0]){
              return 0;
      }else if(num > arr1[arr.length -1]){
              return arr1.length;
      }
      for(let i = 0; i < arr1.length; i++){
          if(num > arr1[i] && num < arr1[i + 1]){
              return i + 1;
          }else if(num === arr1[i]){
            return i;
          }
      }
  }
  
  console.log(getIndexToIns([5, 3, 20, 3], 5));