//alerts that JS is running
window.alert("This is an alert! JavaScript is running!");
//get references to the #generate element
let generateBtn = document.querySelector("#generate");
console.log(generateBtn);

//set variables for all characters available to choose from when answering prompts
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var specialChars = "!@#$%^&*()_-+={[}]|:;<>.?/";
let everyCharacter = "";

//when called, function runs through all prompts to ask preferences for password
function generatePassword() {
  everyCharacter = ""; 
  let passwordLength = prompt(
    "Enter the desired length for your password must be at least 8 characters and no more than 128 characters. Select a number between 8-128."
  );
  //confirms password length meet criteria
  if (
    passwordLength < 8 ||
    passwordLength > 128 ||
    isNaN(parseInt(passwordLength))
  ) {
    alert(
      "INVALID. Please, enter a number between 8-128 for your password's length."
    );
    //if it meets all criterias, move on to next prompts
  } else { // prompt for lower case chars
    let confirmLowerCase = confirm(
      "Would you like to include LOWER CASE characters?"
    );
    if (confirmLowerCase) {
      everyCharacter += lowerCase;
    }
    let confirmUpperCase = confirm(
      "Would you like to include UPPER CASE characters?"
    );
    if (confirmUpperCase) { //prompt for upper case chars
      everyCharacter += upperCase;
    }
    let confirmNums = confirm(
      "Would you like to include NUMERIC characters?"
    );
    if (confirmNums) { // prompt for numeric chars
      everyCharacter += nums;
    }
    let confirmSpecialChars = confirm(
      "Would you like include SPECIAL characters?"
    );
    if (confirmSpecialChars) { //prompt for special chars
      everyCharacter += specialChars;
    }
    //alerts user that at least one type of character must be selected in order to proceed
    if (
      confirmLowerCase === false &&
      confirmUpperCase === false &&
      confirmNums === false &&
      confirmSpecialChars === false
    ) {
      alert("INVALID. Please select at least one character type.");
      generatePassword();
    }
  }
  //loops through password string until reaches desired length
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += everyCharacter.charAt(
      Math.floor(Math.random() * everyCharacter.length)
    );
  }
  return password;
}

//given code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);


let copyBtn = document.querySelector("#copy");
console.log(copyBtn);
var passwordDisplayed;

//function to copy the password generated
function copyPassword() {
  var copyText = document.getElementById("password");
  var text = copyText.value;
  if (text.length > 0) {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value).then(function () {
      alert("Your password has been copied to clipboard.");
    });
    // document.execCommand("copyPassword");
  }
}
copyBtn.addEventListener("click", copyPassword);

