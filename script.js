// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {

// Length prompt
const passLength = parseInt(prompt('What is your desired password length?'))
 if (passLength < 8 || passLength > 128) {
    alert ('Password must be between 8 and 128 characters long');
    return
}
  
// Variables

const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '123456789'
const special = '!$*&@'
const low = confirm('Would you like to use lower case letters?')
const up = confirm('Would you like to use upper case letters?')
const numbersC = confirm('Would like to use numbers?')
const symbols = confirm(' Would you like to use special characters?')
let passHolder = ''
let newPassword = ''

// Conditional

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

// Random character selector
for(let i = 0; i < passLength; i++) {
  let randomIndex = Math.floor(Math.random() * passHolder.length)
  newPassword += passHolder[randomIndex]
}
return newPassword
}

function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;

  }

// Make button work
  generateBtn.addEventListener("click", writePassword);







