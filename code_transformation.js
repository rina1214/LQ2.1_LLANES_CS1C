// NUMBER 1 (LETTER A)
//A variable that store age
let age = 18;
//A variable that store the general Average
let genAverage = 95; 
//To check if age is greater than or equal to 18 and genAverage is greater than or equal to 83
(age >= 18 && genAverage >= 83)
    ? console.log("You may enter College, under BSCS Program") // If both conditions are true, print this message.
    : console.log("Both conditions may have not met and not allowed to enroll"); // If either condition is false, print this message.


// NUMBER 1 (LETTER B)
//A variable that store subject 
let subject = "DSA"; 
//A variable that store grade
let grade = 94; 

// Check if 'subject' is strictly equal to  DSA and grade is greater than or equal to 80.
(subject === "DSA" && grade >= 80) 
    ? console.log("You may enroll Apllication Development") // If both conditions are true, print this message.
// To check if subject is strictly equal to Math101  and grade is less than or equal to 80.
    : (subject === "Math101" && grade <= 80 ) 
        ? console.log("You may enroll Calculus") // If both conditions are true, print this message.
        : console.log("You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculus"); // If neither of the above conditions are met, print this message.

// NUMBER 2 (LETTER A)

let age_ = 20; // Declare a variable 'age_' and assign it the value 20.

if(age_ >= 18){ // Check if 'age_' is greater than or equal to 18.
    console.log("You may now Register as a Voter for Elections 2025"); // If the condition is true, print this message.
}else{ // Otherwise (if the condition is false),
    console.log("You are too young to register as a voter for Elections 2025"); // print this message.
}
 
// NUMBER 2 (LETTER B)

let gen_Average = 96; // Declare a variable 'gen_Average' and assign it the value 96.

if(gen_Average >= 85){ // Check if 'gen_Average' is greater than or equal to 85.
    console.log("You may enroll in all Course Programs"); // If true, print this message.
}else if(gen_Average < 85 && gen_Average > 82){ // Otherwise, check if 'gen_Average' is less than 85 AND greater than 82.
    console.log("You may enroll in any Course Program except in CTE, SCJE,CHS"); // If true, print this message.
}else{ // Otherwise (if neither of the above conditions are true),
    console.log("You may enroll in any Course Program except in CTE, SCJE, CHS, CCS"); // print this message.
}

// Number 3

let fname = "Jose Cruz"; // Declare a variable 'fname' and assign the string "Jose Cruz" to it.
let i = 0; // Declare a variable 'i' and initialize it to 0. This variable will act as a loop counter.

while (fname.length > i) { // Start a while loop that continues as long as the length of 'fname' is greater than 'i'.
  let c = 2 + i; // Declare a variable 'c' and assign it the value of 2 plus the current value of 'i'.
  let nLengthCounterTwo = fname.length - c; // Declare a variable 'nLengthCounterTwo' and assign it the length of 'fname' minus 'c'.
  console.log(fname); // Print the value of 'fname' (which is "Jose Cruz") to the console.
  console.log("Iterations Name was Printed: " + i); // Print a message to the console indicating the current iteration number ('i').
  i++; // Increment the value of 'i' by 1, preparing for the next iteration of the loop.
}
