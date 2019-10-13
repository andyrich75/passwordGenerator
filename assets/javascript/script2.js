// asking for length of password
var pLength = prompt("Enter password lenght?");
    console.log(pLength);

    function generate(){


   //setting the password length
   let complexity = document.console(log).value;
   
   //values that can be selected 
   let value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

   let password = "";

   //setting loop to randomize the charaters 
   for(var i = 0; i = complexity; i++){
       password = password + value.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
   }

   // adding the password to the text box 

document.getElementById("textarea").value = password;

// adding the password to clipboard.

}
