function hasTargetSum(array, target) {
  // Write your algorithm here 
  for(let i=0 ; i<array.length ; i++){
    const complement = target - array[i]
    for (let j=i+1 ; j<array.length ; j++){
      if(array[j]=== complement) return true
    }
  } 
  return false;
}

/* 
  Write the Big O time complexity of your function here 
  
*/

/* 
  Add your pseudocode here
  I have to write a function that has 2 arguemnt , the first is array and the second is the target number , 
  we have to check if we can add 2 numbers from the array that give us the target and print true , if not print false 
*/

/*
  Add written explanation of your solution here
  iterat through the array 
  check for the complement 
  check for the rest element 
  print the result 



*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
