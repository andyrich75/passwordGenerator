
//complexity of the password 
var passwordLength = prompt("Enter password lenght?");

//confirm for charaters to be included
var upperCase = confirm("Press ok to use uppercase letters!");

var lowerCase = confirm("press ok to use lowercase letters!");

var specialChar = confirm("press ok to use special charaters!")

//values that can be selected
var keylist="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789"
var temp=''

function generatepass(plength){
temp=''
for (i=0;i<plength;i++)
temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
return temp
}

function populateform(enterlength){
document.pgenerate.output.value=generatepass(enterlength)
}

