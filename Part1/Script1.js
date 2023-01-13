const promptInput = prompt("Enter Username and Password separated by a space");
const UserPass = promptInput.split(" ");
if (UserPass[0] != "admin") alert("Username is not valid");
else if (UserPass[1] != "421$$") alert("Password is incorrect");
else alert("Login Successful")

