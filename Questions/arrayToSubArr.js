function chunkArrayInGroups(arr, size) {
    let arr1 = []
    for(let i = 0; i < arr.length; i++){
        if((i)*size > arr.length){
          break;
        }
        const subArr = arr.slice(i*size ,(i + 1)*size)
        if(subArr.length !== 0){
            arr1.push(subArr);
        }
        
    }
    return arr1;
  }
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
  