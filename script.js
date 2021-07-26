// Assignment code here
 
function generate() {
 
    //creating a placeholder for the options and password
     
      var options = '';
      var password = '';
     
    //randomly determining the password length (limited from 8 - 128)

      var passwordLength = prompt("How long would you like the password to be (enter a number between 8 and 128)?");
      var passwordLengthCheck = isNaN(passwordLength);
      if (passwordLength === "") {
        alert("At least enter something!")
        return;
      } else if (passwordLengthCheck == true) {
        alert("That's not a number you melon!");
        return;
      } else if (passwordLength > 128 || passwordLength < 8) {
        alert("That's not a number between 8 and 128! >:(");
        return;
      }
     
    //asking if the user would like to include certain types of characters
     
      var lowPrompt = prompt("Would you like to include lowercase characters?");
      var uppPrompt = prompt("Would you like to include uppercase characters?");
      var numPrompt = prompt("Would you like to include numeric characters?");
      var spePrompt = prompt("Would you like to include special characters?");
     
    //converting the user responses to lowercase to account for capitalization
     
      var low = lowPrompt.toLowerCase();
      var upp = uppPrompt.toLowerCase();
      var num = numPrompt.toLowerCase();
      var spe = spePrompt.toLowerCase();
     
    //adding characters to the options depending on user input
     
      if (low === "yes") {
        options = options + "qwertyuiopasdfghjklzxcvbnm";
      }
      if (upp === "yes") {
        options = options + "QWERTYUIOPASDFGHJKLZXCVBNM";
      }
      if (num === "yes") {
        options = options + "1234567890";
      }
      if (spe === "yes") {
        options = options + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      }
      var optionLength = options.length;
     
     
    //add a random character from the options string to the password string, n times (where n = the password length)
     
      for(i = 0; i < passwordLength; i++) {
        var x = Math.floor(Math.random() * optionLength + 1);
        var newLetter = options.charAt(x - 1);
        password = password + newLetter;
      }
     
    //changing the html to the new 'password' string
     
      document.getElementById("password").innerHTML = password;
    }
     
    
    