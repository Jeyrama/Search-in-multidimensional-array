/*
Write a function that gets a sequence and value and returns true/false 
depending on whether the variable exists in a multidimentional sequence.

Example:
  locate(['a','b',['c','d',['e']]],'e'); // should return true
  locate(['a','b',['c','d',['e']]],'a'); // should return true
  locate(['a','b',['c','d',['e']]],'f'); // should return false
*/


// Solution

let locate = function(arr, v) {
  return arr.some(function(e) { return Array.isArray(e) ? locate(e, v) : e === v; });
}

// or

function locate(array, value){
  let queue = array,
      next;
  while(queue.length){
    next = queue.shift();
    if(Array.isArray(next)){
      queue = queue.concat(next);
    } else if(next == value){
      return true;
    }
  }
  return false;
}