// Assignment code here
 
var generatePassword = document.getElementById('generate');
generatePassword.onclick = generate;

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
     
      var lowConfirm = confirm("If you would like lowercase characters, click 'Ok'; otherwise, click 'Cancel'");
      var uppConfirm = confirm("If you would like uppercase characters, click 'Ok'; otherwise, click 'Cancel'");
      var numConfirm = confirm("If you would like numeric characters, click 'Ok'; otherwise, click 'Cancel'");
      var speConfirm = confirm("If you would like special characters, click 'Ok'; otherwise, click 'Cancel'");
     
    //adding characters to the options depending on user input
     
      if (lowConfirm) {
        options = options + "qwertyuiopasdfghjklzxcvbnm";
      }

      if (uppConfirm) {
        options = options + "QWERTYUIOPASDFGHJKLZXCVBNM";
      }

      if (numConfirm) {
        options = options + "1234567890";
      }

      if (speConfirm) {
        options = options + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      }

      if(!lowConfirm && !uppConfirm && !numConfirm && !speConfirm) {
        alert("ERROR: Failed to produce a password; please select 'Ok' for at least one of the options")
        return;
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
     
    
    