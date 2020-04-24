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

  
// Variables

let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numbers = '123456789'
let special = '!$*&@'
let passLength = parseInt(prompt('What is your desired password length?'))
let low = confirm('Would you like to use lower case letters?')
let up = confirm('Would you like to use upper case letters?')
let numbersC = confirm('Would like to use numbers?')
let symbols = confirm(' Would you like to use special characters?')
let passHolder = ' '
let newPassword = ' '

// Conditional
if (passLength < 8 || passLength > 128) {
  alert('Password must be between 8 and 128 characters long');
}
if (low) {
  passHolder += lowerCase;
}
if (up) {
  passHolder += upperCase;
}
if (numbersC) {
  passHolder += numbers;
}
if (symbols) {
  passHolder += special;
}

for(let i = 0; i < passLength; i++) {
  let randomIndex = Math.floor(Math.random() * passHolder.length)
  newPassword += passHolder[randomIndex]
}









