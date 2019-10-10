
//complexity of the password 
var passwordLength = prompt("Enter password lenght?");



//confirm for charaters to be included
//var upperCase = confirm("Press ok to use uppercase letters!");

//var lowerCase = confirm("press ok to use lowercase letters!");

//var specialChar = confirm("press ok to use special charaters!");
function passGen() {
    
let complexity = document.getElementById("passwordLength").value;

//setting the values to be chosen 
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$(%)*+&-/:;<=>?@[\]{|}";

let password ="";

// create for loop to run through charaters
for(var i = 0; 1 <= complexity; i++){
    password = password + values.charAt(Math.floor() * Math.floor(value.length - 1))
}

//generate on onclick to kick off the password generate
document.getElementById("passclick").addEventListener("generate", myFunction);
//adding to text box 
function myFunction(){
document.getElementById("passclick").value = password;
}

}