// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowercase =  'abcdefghijklmnopqrstuvwxyz'.split('');
let uppercase =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let numbercase = '1234567890'.split('');
let symbolcase =  '~!@#$%^&*()-_=+[]{};:<>/?\|'.split('');

function passGen() {
  let passLength = prompt("Password length:");
  console.log(passLength);

  if (passLength < 8 || passLength > 128) {
    alert("Please enter a password length of at least 8 and no more than 128.");
    return;
  }

  let optionLowercase = confirm("Include Lowercase?");
  let optionUppercase = confirm("Include Uppercase?");
  let optionNumbercase = confirm("Include Numbers?");
  let optionSymbolcase = confirm("Include Symbols?");

  if (!optionLowercase && !optionUppercase && !optionNumbercase && !optionSymbolcase) {
    alert("You must select at least one character type.");
    return;
  }

  let validChars = [];
  if (optionLowercase) validChars = validChars.concat(lowercase);
  if (optionUppercase) validChars = validChars.concat(uppercase);
  if (optionNumbercase) validChars = validChars.concat(numbercase);
  if (optionSymbolcase) validChars = validChars.concat(symbolcase);

  let passChars = [];
  for (let i = 0; i < passLength; i++) {
    let char = Math.floor(Math.random() * validChars.length)
    passChars.push(validChars[char])
  }
  return passChars.join("");
}

// Write password to the #password input
function writePassword() {
  let password = passGen();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
