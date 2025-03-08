// i set the real password  here
let user_password = "123456789"
// i prompt the user to input their name
let user_name = prompt("What is your name");
// and in this line i prompt the user to put his/her password
let var_password = prompt("What is your password")

// if the statement is true the iteration will execute
if (var_password === user_password){
    alert(`Welcome ${user_name}!`);
// if the statement is false this will execute
}else {
    alert(`Maybe Username and Password is Invalid or Does not Match`);
}
