//Set variable for elements on the page
var passwordElement = document.querySelector("#password");
var passclickElement = document.querySelector("#passclick");
var copyPassElement = document.querySelector("#copyPass");



//prompts for crterias
var pLength = prompt("Enter password lenght?");
var uppercaseInput = confirm("Press ok to use uppercase letters!");
var numbersInput = confirm("press ok to use numbers!");
var punctuationInput = confirm("press ok to use special charaters!");


//seting the variables in a string that can be used. 
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";



//setting the function of getting the password 
/*function p.lenth() {
    
    userPassword = "";
    passwordCharSet = "";

    if (uppercaseInput.confirm) {
      passwordCharSet += uppercase;
    }
    if (punctuationInput.confirm) {
      passwordCharSet += punctuation;
    }
    if (numbersInput.confirm) {
      passwordCharSet += numbers;
    }
    plength = Number(lengthInput.value);
    
//generating the pass word. 
for (let i = 0; i < plength; i++) {
    userPassword += passwordCharSet.charAt(Math.floor(Math.random() * p.length;

    }*/