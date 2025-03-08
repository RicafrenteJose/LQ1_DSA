// i let the user here to choice
let createMatrix = prompt("Do you want to create a Matrix (Yes/No):");
// i use the converter to reduce the error 
if (createMatrix.toUpperCase() === "YES") {
// i use the parseInt here to convert all decimal into a whole number
    let limit1 = parseInt(prompt("Enter the first number of loops:"));
    let limit2 = parseInt(prompt("Enter the second number of loops:"));
    let limit3 = parseInt(prompt("Enter the third number of loops:"));
// i let the user here to input the loops he/she wants to perform
    let str1 = prompt("Enter the first string you wish to print:");
    let str2 = prompt("Enter the second string you wish to print:");
    let str3 = prompt("Enter the third string you wish to print:");
//i display this to have a better presentation
    console.log("Create Matrix:");
//iteration, this will run if the statement on the previous line is true
    for (let i = 0; i < limit1; i++) {
        for (let j = 0; j < limit2; j++) {
            for (let k = 0; k < limit3; k++) {
                console.log(`${str1} ${str2} ${str3}`);
            }
        }
    }
// if false this will print
} else {
    console.log("Thank you, re-run the program if you change your mind.");
}
