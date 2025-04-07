//code snippet completion
let registeredUname = prompt("Register your Username"); 
let registeredPword = prompt("Register your passcode");
let reEnteredPword = prompt("Re-enter your passcode");

if (registeredPword === reEnteredPword) {
  alert("Congratulations! You have successfully registered.");

  let loginUname = prompt("Username: ");
  if (loginUname === registeredUname) {
    let loginPword = prompt("Password: ");
    (loginPword === registeredPword)
      ? alert("Welcome to DSA, " + registeredUname)
      : alert("Incorrect Password, Re-run the code!");
  } else {
    alert("Incorrect Username, Re-run the code!");
  }
} else {
  alert("Password does not Match, Re-run the code!");
}
