//1. Always Hungry

function alwaysHungry(array) {
  let foodCounter = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "food") {
      console.log("yummy");
      foodCounter++;
    }
  }
  if (foodCounter === 0) {
    console.log("I'm hungry");
  }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

// 2. High Pass Filter

function highPass(arr, cutoff) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

//3. Better than average

function betterThanAverage(arr) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > avg) {
      count++;
    }
  }
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

//4. Array Reverse

function reverse(arr) {
  arr.reverse();
  return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

//5. Fibonacci Array

function fibonacciArray(n) {
  var fibArr = [0, 1];
  while (fibArr.length < n) {
    fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
  }
  return fibArr;
}
var result = fibonacciArray(10);
console.log(result);

