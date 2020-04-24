// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add variables
let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numbers = '123456789'
let special = '!$*&@'
let passwordL = parseInt(prompt('What is your desired password length?'))
let low = confirm('Would you like to use lower case letters?')
let up = confirm('Would you like to use upper case letters?')
let numbersC = confirm('Would like to use numbers?')
let symbols = confirm(' Would you like to use special characters?')




