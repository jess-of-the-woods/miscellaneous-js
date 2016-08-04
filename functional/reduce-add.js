var array = [4,5,6,7,8];
var singleVal = 0;

singleVal = array.reduce(function(prev, curr){
  return prev + curr;  
});

/*
This reduce function adds each element in the array and returns a single value which is the sum of all values.
*/