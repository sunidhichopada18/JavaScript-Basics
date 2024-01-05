function frankenSplice(arr1, arr2, n) {
    let finalArr = []
    finalArr = [...arr2.slice(0,n), ...arr1, ...arr2.slice(n)]
    return finalArr;
  
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));