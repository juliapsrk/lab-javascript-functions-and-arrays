// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1, num2;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  if (typeof words !== 'undefined' && words.length === 0) {
    return null;
  }
  // should return the word when called with a single-word array
  else if (words.length < 2) {
    return words[0];
  }
  /*
  // should return the first occurrence of the word when longest have multiple occurrences
  else if () {
    return ;
  }
  // should return the longest occurrence when it has multiple words
  else {
    return ;
  }
*/
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Iteration #3.1 Bonus:
function sum(nums) {
  // should return zero if receives an empty array when called
  if (typeof nums !== 'undefined' && nums.length === 0) {
    return 0;
  }
  // should return the sum with one number array
  else if (nums.length < 2) {
    return nums[0];
  }
  // should return zero if all elements are zero
  else if (nums.every((item) => item === 0)) {
    return 0;
  }
  // should return the sum when passed array of numbers
  else if (typeof nums !== NaN) {
    return nums.reduce((a, b) => a + b, 0);
  }
  // should return the sum when passed array of strings
  else if (typeof nums === 'string') {
    return;
  }
}
/*
  // should return the sum when passed array of mixed strings and numbers -
  else if () {
    return ;
  }
  // should return the sum when passed array of mixed strings, numbers and booleans -
  else if () {
    return ;
  }
  // should throw an error when unsupported data type (object or array) present in the array
  else if () {
    return ;
  }
}
*/

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  // should return null if receives an empty array when called
  if (numbersAvg.length === 0) {
    return null;
  }
  // should return the average of a one-element array
  else if (numbersAvg.length < 2) {
    return numbersAvg[0];
  }
  // should return the average even with negative values
  // should return the average of the array
  else {
    const sum = numbersAvg.reduce((a, c) => a + c, 0);
    return sum / numbersAvg.length;
  }
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  // should return null if receives an empty array when called
  if (wordsArr.length === 0) {
    return null;
  }
  // should return the average of a one-element array -- FAIL
  else if (wordsArr.length < 2) {
    return wordsArr[0];
  }
  // should return the average of the array
  else {
    return wordsArr.join('').length / wordsArr.length;
  }
}

// Bonus - Iteration #4.1
function avg() {}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(wordsUnique) {
  // should return null if receives an empty array when called
  if (wordsUnique.length === 0) {
    return null;
  }
  // should return the correct uniqified array when an array of the same elements passed as argument
  // should return the same array when no element is repeated
  // should return the uniquified array
  else {
    let newArr = [...new Set(wordsUnique)];
    return newArr;
  }
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind) {
  // should return null if receives an empty array when called
  if (wordsFind.length === 0) {
    return null;
  }
  // should return true if the word we are looking for is the only one in the array
  else if (wordsFind.length < 2) {
    return true;
  }
  // should return false if the word we are looking for is not in the array
  else if (wordsFind.indexOf() > -1);
  {
    return false;
  }
  /* - FAIL
  // should return true if the word we are looking for is in the array
  else {
    return true;
  }
  */
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordsCount) {
  // should return 0 (zero) if receives an empty array when called
  if (wordsCount.length === 0) {
    return 0;
  }
  // should return 0 (zero) when the word doesn't appear in the array
  else if (wordsCount.indexOf() > -1);
  {
    return 0;
  }
  // should return 1 (one) when the word appears only one time in the array, should return 5 (five) when the word appears 5 times in the array
  // - FAIL
  const countOccurence = {};
  for (const iteration7Word of wordsCount) {
    countsOccurence[iteration7Word] = countsOccurence[iteration7Word] ? countsOccurence[iteration7Word] + 1 : 1;
  }
  return countsOccurence[i];
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
