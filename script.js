// Generate code -> Red button
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand *max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  while (true) {
    
    var userInput = window.prompt("How many characters would you like your password? \nChoose between 8 and 128.")
    
    // user exited the prompt
    if (userInput === null) {
      return
    }
    
    var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("That's not a number.")
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid password length. Length should be between 8 and 128 characters.")
  } else {
    break
  }
  }
  
  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")  
  
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  var pickChoices = []

  // converts letters to uppercase
  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  // push means add item to Choices
  if (userWantsNumbers === true) {
    pickChoices.push(numberList)
  }

  if (userWantsSymbols === true) {
    pickChoices.push(symbolList)
  }

  if (userWantsLowercase === true) {
    pickChoices.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
    pickChoices.push(uppercaseList)
  }

  if (pickChoices.length === 0){
    pickChoices.push(lowercaseList)
  }

  var generatedPassword = ""

  if (!userWantsNumbers && !userWantsSymbols && !userWantsLowercase && !userWantsUppercase) {
    choices = alert("You must choose a criteria.");
    return;
}

  // how do we generate a random item from the list
  for (var i = 0; i < passwordLength; i++){
    var randomList = getRandomItem(pickChoices)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }
  
  //function is over but we have the generation result
  return generatedPassword
}

// Write password to the #password input
// function about password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
  passwordText.value = password;
  }
}

// Add event listener to generate button
// when click, then generate password
generateBtn.addEventListener("click", writePassword);

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

// document.execCommand('copy') is deprecated but works now.
// I'll find another way later.
function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard");
}
