// Write your code below
let bobsFollowers = ['A', 'B', 'C', 'D'];
let tinasFollowers = ['A', 'B', 'E'];

let mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

