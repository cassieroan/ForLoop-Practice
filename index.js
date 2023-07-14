//////////////////////////////////////
//////////////Psuedocode/////////////
/////////////////////////////////////

//----------------------------------------------------------------------------------------------------------------

//Only Odds Prompt:
//Create a JavaScript code that accepts an array of numbers and returns a new array with only the odd numbers from the original array. If there is only one odd number in the array, return an array with that single value.

//Only Odds Psuedocode Solution:
// For each number in an array of numbers, check if each number is divisible by 2
// If it is, add that number to it's own array called "arr"
// Print the "arr" array

//----------------------------------------------------------------------------------------------------------------

//Vowel versus Consonant Prompt:
//Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.


//Vowel versus Consonant Solution:
//Create a variable that holds a string, preferably one with multiple consonants and vowels
// For each character in that string, seperate them individually into their own array called "seperated_string"
// If the character in that string begins with a,e,i,o, or u, push that character into an empty string called "vowels"
// Else, push that character into an empty string called "consonants"
// Print an interpolated string containing the length of vowels & consonants to the console

//----------------------------------------------------------------------------------------------------------------

//Reverse Array Prompt:
//With a for loop, create a JavaScript code that creates a new array in reverse order.


//Reverse Array Solution:
//Create a variable that's an array of numbers
//Starting at the element at end of that array, grab every element in reverse order and put it into an empty array called "reverse_array"

//----------------------------------------------------------------------------------------------------------------

//FizzBuzz Prompt:
//Create a JavaScript code that prints each number from 1 to 100 on a new line. For each multiple of 3, print "Fizz" instead of the number.For each multiple of 5, print "Buzz" instead of the number.For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


//FizzBuzz Solution:
//In a list of 100 numbers, for each number:
// First check to see if the number is cleanly divisible by both 3 & 5, if so, print "fizzbuzz" to the console
// If not, check if the number is cleanly divisible by both 3, if so, print "fizz" to the console
// If not, check if the number is cleanly divisible by both 5, if so, print "buzz" to the console
// If not, print the number to the console





//////////////////////////////////////
/////////////////Code////////////////
/////////////////////////////////////


//Only Odds Code
let arr = [];
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number % 2 !== 0) {
    arr.push(number);
  }
}
console.log(arr);

//Vowel vs. Consonant Code
let string = "yikes";
let seperated_string = [];
let vowels = [];
let consonants = [];

for (let i = 0; i < string.length; i++) {
  let char = string[i];
  seperated_string.push(char);
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    vowels.push(char);
  } else {
    consonants.push(char);
  }
}
console.log(string + " has " + consonants.length + " consonants and " + vowels.length + " vowels");


//Reverse Array Code
let original_array = [1, 2, 3, 4, 5];
let reverse_array = [];

for (let i = original_array.length - 1; i >= 0; i--) {
    reverse_array.push(original_array[i]);
}
console.log(reverse_array);


//FizzBuzz Prompt
for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("fizzbuzz");
    } else if (number % 3 === 0) {
      console.log("fizz");
    } else if (number % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(number);
    }
  }
  







