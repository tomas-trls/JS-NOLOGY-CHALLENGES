
/* 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
*/

function isNumberPositive(number){
  if (number > 0){
    return true
  } else if (number < 0) {
    return false
  } else {
    return 'Please insert a number over or under \"0\"'
  }
}



console.log(isNumberPositive(-1)); // returns false
console.log(isNumberPositive(10)); // returns true
console.log(isNumberPositive(0));

//2. Write a function that takes a number of days and converts it into an age.

const convertDaysToAge = (days) => {
  let years = days/365;
  return Math.round(years);
}

console.log(convertDaysToAge(3650)); // returns 10
console.log(convertDaysToAge(6570)); // returns 18


//3. Write a function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3){
    return num1
  } else if (num2> num1 && num2 > num3){
    return num2
  } else {
    return num3
  }
}

console.log(getLargestNumber(2 ,1, 4)); // returns 4
console.log(getLargestNumber(6,2,3)); // returns 6
console.log(getLargestNumber(2,3,10));
console.log(getLargestNumber(2,2,8));

//4. Write a function that takes an array of names and returns the last name from the array of names.

const getLastName = (array) => {
  return array[array.length - 1];
}

console.log(getLastName(["Charlie", "Rob", "Andy"])); // returns “Andy”
console.log(getLastName(["Ash","Stu"])); // returns "Stu"




//5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.


const allNumbersPositive = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= 0) {
      return false;
    }
  }
  return true;
}




console.log(allNumbersPositive([2,4,5])); // returns true
console.log(allNumbersPositive([-5,4,6])); // returns false
console.log(allNumbersPositive([-4,3,-3]));
