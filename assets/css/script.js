// set variables for all characters to choose from when generating password
var nums = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!/#$%&'()*+,-.:;<=>?@[]^_`{|}~";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function will log all criterias chosen for password.
function generatePassword() {
  // set variable to hold password length, log to console. 
  var passLength = window.prompt("Choose how long Your password may be any length between 8-128 characters.");
  console.log(passLength);
  // create check for password length to meet criterias --CHECK WHY IT DOESNT WORK
  while (passLength < 8 || passLength > 128) {
    if (passLength < 8) {
      window.prompt("Password must be at least 8 characters long. Please, choose a length between 8-128 characters.")
      console.log(passLength);
    }
    else if (passLength > 128) {
      window.prompt("Password must be less than 128 characters long. Please, choose a length betwwen 8-128 characters.")
      console.log(passLength);
    }
  }
  //criteria for length was met, move on to next prompts
  console.log(passLength);

  var confirmNum = confirm("Would you like to include numeric characters in your password?");
  
}

//run function to generate password
generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
