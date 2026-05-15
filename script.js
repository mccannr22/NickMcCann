//variables
const heading = document.querySelector("#heading");
let question = document.querySelector("#question")
let firstName = document.querySelector("#fname");
let lastName = document.querySelector("#lname");


//functions
question.oninput = function(){
    if (question.value === "yes"){
        heading.innerHTML = "Welcome back!";
        alert("Welcome back!");
    } else if (question.value == "no"){
        heading.innerHTML = "Welcome to Tony's Pizza!";
        alert("Welcome to Tony's Pizza!");
    }
}

lastName.oninput = function(){
    if (firstName.value == "Nick"){
        heading.innerHTML = "Welcome to the site, Nick";
    } else if (firstName.value == "Larry"){
        heading.innerHTML = "You are not Nick";
    } else {
        heading.innerHTML = "We love to hear your feeback";
    }
    
}
