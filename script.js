var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "?", ".", "-", "/", ">", "<", "[", "]", "$", "#", "%", "@", "&", "*"];
var userInput = [];
var newPassword = [];


function characterQuestions(){
  var lowerCase = window.confirm("Do you want lowercase letters?");
  var upperCase = window.confirm("Do you want uppercase letters?");
  var numbersQuestion = window.confirm("Do you want numbers?");
  var specialChar = window.confirm("Do you want special characters?");

  if (lowerCase){
    userInput = userInput.concat(lowerCaseLetters);
  }

  if (upperCase){
    userInput = userInput.concat(upperCaseLetters);
  }

  if (numbersQuestion){
    userInput = userInput.concat(numberArray);
  }

  if (specialChar){
    userInput = userInput.concat(specialCharacters);
  }

}

function generatePassword(){
  var numCharacters = window.prompt("How many characters long would you like your password to be? Please choose between 8 and 128");

  if (numCharacters < 8 || numCharacters > 128){
    window.alert ("Invalid option, must be above 8 or below 128");
    generatePassword();
  }

  else {
    characterQuestions();
    for (var i = 0; i<numCharacters; i++) {
      newPassword = newPassword.concat(userInput[Math.floor(Math.random()*userInput.length)]);
    } 
    newPassword = newPassword.join("");
    return newPassword;
  } 

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
