
//complexity of the password 
var passwordLength = prompt("Enter password lenght?");

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

