// i display this so that the user is easier to choose what item to choose
console.log("A. Pepsi Cola");
console.log("B. Coca Cola");
console.log("C. Apple(per kg)");
console.log("D. Orange (per kg)");
console.log("E. Hotdogs (per kg)");
// i prompt the user to enter his/her choices
let choice = prompt("Enter your choice of item:(A/B/C/D/E)");
// i use switch to have a cleaner code but they are the same in if-else statement
// if the input matches a case, the case will execute
switch (choice.toLocaleUpperCase()) {
    case "A":
        alert("Pepsi Cola - $2.00");
        break;
    case "B":
        alert("Coca Cola - $2.50");
        break;
    case "C" :
        alert("Apple (per kg) - $3.00 ")       
    case "D":
        alert("Orange (per kg)- $5.00");
        break;
    case "E":
        alert("Hotdogs (per kg) - $10.00");
        break;
    // this is the else
    default:
        alert("Invalid Choice")
}

