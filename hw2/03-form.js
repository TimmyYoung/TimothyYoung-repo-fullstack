/** Exercise 03 - Form **/

// Add your code here
//Using document to access html elements of the webpage
let form = document.querySelector("form");
form.addEventListener("submit", enterInfo);

//Function for error handling incorrect name + email submissions.
function error_handling(name_check,email_check){
    if (!(name_check && email_check)) {
    let error = document.getElementById("error");
    error.style.color = "red";
    if (!(name_check || email_check)) {
        error.innerText = "Error: Name + Email are required fields.";
        } else if (!name_check) {
        error.innerText = "Error: Name is a required field.";
        } else {
        error.innerText = "Error: Email is a required field.";
        }
    return;
    } else {
    error.innerText = "";
    }
}
//Main-function for form submission validation. 
function enterInfo(event) {
  event.preventDefault();

    //Variables
    const name_check = form.elements.name.value.length;
    const email_check = form.elements.email.value.length;
    const message_check = form.elements.message.value.length;
    input_name = form.elements.name.value;
    input_email = form.elements.email.value;
    input_message = form.elements.message.value;
    input_checkmark = form.elements.checkbox.checked;

    //Checking for errors in name + email submissions
    error_handling(name_check,email_check);

    //Outputting to console for debugging form input/output.
    console.group("========= FORM SUBMISSION =========");
    //Input Name
    if (name_check) {
    console.log("Name:", input_name);
    } else {
    console.log("Name: empty input");
    }
    //Input Email
    if (email_check) {
    console.log("Email:", input_email);
    } else {
    console.log("Email: empty input");
    }
    //Input Message
    if (message_check) {
    console.log("Message:", input_message);
    } else {
    console.log("Message: empty input");
    }
    //Input checkmark for Newsletter
    if (input_checkmark) {
    console.log("Newsletter: Yes, I would like to join the newsletter.");
    } else {
    console.log("Newsletter: No, thank you.");
    }
    //Ending the console log grouping for live debugging.
    console.groupEnd();
    }