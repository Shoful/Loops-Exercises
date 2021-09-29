//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)

let number = 9;
for (let i = 0; i <= 10; i++) {
  console.log(i * number);
}

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it
let number = 5;
while (number < 55) {
  console.log(number);
  number += 5;
}


//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;

const array = [2, 7, 5, 9, 8, 7];
function arrayOfNumbers() {
  let findDuplicates = (arr) =>
    arr.filter((item, index) => arr.indexOf(item) != index);

  console.log(findDuplicates(array));
}
arrayOfNumbers();


//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..

function assignGrade(grade) {
  if (grade < 61) {
    console.log(`For ${grade} you got a F`);
  } else if (grade >= 61 && grade <= 70) {
    console.log(`For ${grade} you got a D`);
  } else if (grade >= 71 && grade <= 80) {
    console.log(`For ${grade} you got a C`);
  } else if (grade >= 81 && grade <= 90) {
    console.log(`For ${grade} you got a B`);
  } else if (grade >= 91) {
    console.log(`For ${grade} you got a A`);
  }
} for (let i = 60; i < 101; i++) {
  assignGrade(i);
}


